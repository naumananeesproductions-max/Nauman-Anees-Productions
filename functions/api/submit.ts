import {
  OFFICIAL_APPS_SCRIPT_URL,
  RequestDuplicateGuard,
  validateSubmissionPayload,
  verifyAppsScriptResponse,
} from '../../src/utils/submission';
import type { SubmissionPayload } from '../../src/types/studio';

interface Env {
  APPS_SCRIPT_URL?: string;
  APPS_SCRIPT_SECRET?: string;
}

const duplicateGuard = new RequestDuplicateGuard(10 * 60 * 1000);

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;

  let payload: Partial<SubmissionPayload>;
  try {
    payload = (await request.json()) as Partial<SubmissionPayload>;
  } catch {
    return Response.json(
      { success: false, error: 'Malformed JSON body.' },
      { status: 400 }
    );
  }

  const validation = validateSubmissionPayload(payload);
  if (!validation.valid) {
    return Response.json(
      {
        success: false,
        error: 'Validation failed. Please check required fields.',
        fieldErrors: validation.errors,
      },
      { status: 400 }
    );
  }

  const requestId = String(payload.requestId).trim();
  if (duplicateGuard.isDuplicate(requestId)) {
    return Response.json(
      {
        success: false,
        requestId,
        error: 'This request ID has already been submitted.',
      },
      { status: 409 }
    );
  }

  const secret = env.APPS_SCRIPT_SECRET?.trim();
  const appsScriptUrl = env.APPS_SCRIPT_URL?.trim() || OFFICIAL_APPS_SCRIPT_URL;

  if (!secret) {
    return Response.json(
      {
        success: false,
        requestId,
        code: 'CONFIG_MISSING',
        error:
          'Cloudflare APPS_SCRIPT_SECRET is not configured yet. Please add it in Cloudflare Pages Settings > Environment variables.',
      },
      { status: 503 }
    );
  }

  const upstreamPayload = {
    secret,
    type: payload.type,
    requestId,
    category: payload.category,
    selectedService: payload.selectedService,
    sourcePage: payload.sourcePage,
    data: payload.data,
  };

  try {
    const upstreamResponse = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(upstreamPayload),
      redirect: 'follow',
    });

    const rawText = await upstreamResponse.text();
    const verified = verifyAppsScriptResponse(rawText);

    if (!upstreamResponse.ok || !verified.ok) {
      return Response.json(
        {
          success: false,
          requestId,
          error:
            verified.error ||
            'Google Apps Script did not confirm submission receipt. Please retry.',
        },
        { status: 502 }
      );
    }

    duplicateGuard.markAccepted(requestId);
    return Response.json({
      success: true,
      requestId,
      message: 'Submission verified and recorded.',
    });
  } catch {
    return Response.json(
      {
        success: false,
        requestId,
        error: 'Upstream connection error while contacting Google Apps Script.',
      },
      { status: 502 }
    );
  }
};
