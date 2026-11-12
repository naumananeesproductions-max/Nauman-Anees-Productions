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

interface PagesContext {
  request: Request;
  env: Env;
}

const duplicateGuard = new RequestDuplicateGuard(10 * 60 * 1000);

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;

  let payload: Partial<SubmissionPayload>;
  try {
    payload = (await request.json()) as Partial<SubmissionPayload>;
  } catch {
    return jsonResponse({ success: false, error: 'Malformed JSON body.' }, 400);
  }

  const validation = validateSubmissionPayload(payload);
  if (!validation.valid) {
    return jsonResponse(
      {
        success: false,
        error: 'Validation failed. Please check required fields.',
        fieldErrors: validation.errors,
      },
      400
    );
  }

  const requestId = String(payload.requestId).trim();
  if (duplicateGuard.isDuplicate(requestId)) {
    return jsonResponse(
      {
        success: false,
        requestId,
        error: 'This request ID has already been submitted.',
      },
      409
    );
  }

  const secret = env.APPS_SCRIPT_SECRET?.trim();
  const appsScriptUrl = env.APPS_SCRIPT_URL?.trim() || OFFICIAL_APPS_SCRIPT_URL;

  if (!secret) {
    return jsonResponse(
      {
        success: false,
        requestId,
        code: 'CONFIG_MISSING',
        error:
          'Cloudflare APPS_SCRIPT_SECRET is not configured yet. Please add it in Cloudflare Pages Settings > Environment variables.',
      },
      503
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
      return jsonResponse(
        {
          success: false,
          requestId,
          error:
            verified.error ||
            'Google Apps Script did not confirm submission receipt. Please retry.',
        },
        502
      );
    }

    duplicateGuard.markAccepted(requestId);
    return jsonResponse(
      {
        success: true,
        requestId,
        message: 'Submission verified and recorded.',
      },
      200
    );
  } catch {
    return jsonResponse(
      {
        success: false,
        requestId,
        error: 'Upstream connection error while contacting Google Apps Script.',
      },
      502
    );
  }
};
