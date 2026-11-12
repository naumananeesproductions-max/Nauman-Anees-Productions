import type { SubmissionPayload, SubmissionType } from '../types/studio';

export const OFFICIAL_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzjBm0Lm6Q6-PkbITR9SkzOlQGno_pcpUCWkb4IFgryO0Xnfdu7eK1z0TO0QvXuCus/exec';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function generateRequestId(now: Date = new Date()): string {
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, '0');
  const d = String(now.getUTCDate()).padStart(2, '0');
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NAP-${y}${m}${d}-${rand}`;
}

export function buildSubmissionPayload(params: {
  type: SubmissionType;
  requestId?: string;
  category: string;
  selectedService: string;
  sourcePage: string;
  honeypot?: string;
  formValues: Record<string, string | boolean | number | undefined>;
}): SubmissionPayload {
  const requestId = params.requestId?.trim() || generateRequestId();
  const cleanData: Record<string, string | boolean | number | undefined> = {
    submittedAt: new Date().toISOString(),
  };

  for (const [key, value] of Object.entries(params.formValues)) {
    if (key === 'honeypot' || key === '_hp') continue;
    if (typeof value === 'string') {
      cleanData[key] = value.trim();
    } else if (value !== undefined) {
      cleanData[key] = value;
    }
  }

  return {
    type: params.type,
    requestId,
    category: params.category.trim(),
    selectedService: params.selectedService.trim(),
    sourcePage: params.sourcePage.trim() || '/',
    honeypot: params.honeypot ?? '',
    data: cleanData,
  };
}

export interface ValidationOutcome {
  valid: boolean;
  errors: Record<string, string>;
}

const VALID_TYPES: ReadonlySet<string> = new Set([
  'service_booking',
  'talent_application',
  'event_booking',
  'general_contact',
]);

export function validateSubmissionPayload(payload: Partial<SubmissionPayload>): ValidationOutcome {
  const errors: Record<string, string> = {};

  if (!payload || typeof payload !== 'object') {
    return { valid: false, errors: { _form: 'Invalid request payload.' } };
  }

  if (payload.honeypot && String(payload.honeypot).trim().length > 0) {
    return { valid: false, errors: { _form: 'Automated submission rejected.' } };
  }

  if (!payload.type || !VALID_TYPES.has(payload.type)) {
    errors.type = 'Unsupported submission type.';
  }

  if (!payload.requestId || String(payload.requestId).trim().length < 6) {
    errors.requestId = 'Missing valid request ID.';
  }

  const data = (payload.data && typeof payload.data === 'object' ? payload.data : {}) as Record<
    string,
    unknown
  >;

  const email = String(data.email ?? '').trim();
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (payload.type === 'talent_application') {
    const requiredText: Array<[string, string]> = [
      ['fullName', 'Full name is required.'],
      ['whatsapp', 'WhatsApp number is required.'],
      ['country', 'Country is required.'],
      ['city', 'City is required.'],
      ['ageRange', 'Please select your age range.'],
      ['talentCategory', 'Please choose a talent category.'],
    ];
    for (const [field, message] of requiredText) {
      if (!String(data[field] ?? '').trim()) {
        errors[field] = message;
      }
    }

    if (data.reviewConsent !== true) {
      errors.reviewConsent = 'Please confirm consent for application review.';
    }

    if (String(data.ageRange ?? '').trim() === 'Under 18') {
      if (!String(data.guardianName ?? '').trim()) {
        errors.guardianName = 'Parent or guardian full name is required for applicants under 18.';
      }
      if (!String(data.guardianContact ?? '').trim()) {
        errors.guardianContact = 'Parent or guardian contact number is required.';
      }
      if (data.guardianConsent !== true) {
        errors.guardianConsent = 'Parent or guardian consent is required for applicants under 18.';
      }
    }
    // Note: portfolioLink is strictly OPTIONAL and never blocks submission.
  } else if (payload.type === 'service_booking') {
    const fullName = String(data.fullName ?? data.contactPerson ?? '').trim();
    if (!fullName) {
      errors.fullName = 'Full name or contact person is required.';
    }
    if (!String(data.whatsapp ?? '').trim()) {
      errors.whatsapp = 'WhatsApp or phone number is required.';
    }
    if (!String(payload.selectedService ?? '').trim()) {
      errors.selectedService = 'Please select a specific service.';
    }
  } else if (payload.type === 'event_booking') {
    const requiredText: Array<[string, string]> = [
      ['clientName', 'Client name is required.'],
      ['whatsapp', 'WhatsApp number is required.'],
      ['country', 'Country is required.'],
      ['city', 'City is required.'],
      ['eventType', 'Event type is required.'],
      ['eventDate', 'Preferred event date is required.'],
    ];
    for (const [field, message] of requiredText) {
      if (!String(data[field] ?? '').trim()) {
        errors[field] = message;
      }
    }
  } else if (payload.type === 'general_contact') {
    if (!String(data.fullName ?? '').trim()) {
      errors.fullName = 'Full name is required.';
    }
    if (!String(data.whatsapp ?? '').trim()) {
      errors.whatsapp = 'Phone or WhatsApp number is required.';
    }
    if (!String(data.message ?? '').trim()) {
      errors.message = 'Please enter your inquiry message.';
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function verifyAppsScriptResponse(rawText: string): {
  ok: boolean;
  data?: Record<string, unknown>;
  error?: string;
} {
  if (!rawText || !rawText.trim()) {
    return { ok: false, error: 'Empty response received from Google Apps Script.' };
  }
  try {
    const parsed = JSON.parse(rawText) as Record<string, unknown>;
    if (parsed && typeof parsed === 'object' && parsed.success === true) {
      return { ok: true, data: parsed };
    }
    return {
      ok: false,
      data: parsed,
      error:
        typeof parsed?.error === 'string'
          ? parsed.error
          : 'Google Apps Script did not confirm success.',
    };
  } catch {
    return {
      ok: false,
      error: 'Unexpected non-JSON response from Google Apps Script endpoint.',
    };
  }
}

export class RequestDuplicateGuard {
  private seen = new Map<string, number>();
  private readonly ttlMs: number;

  constructor(ttlMs = 5 * 60 * 1000) {
    this.ttlMs = ttlMs;
  }

  isDuplicate(requestId: string, nowMs: number = Date.now()): boolean {
    this.prune(nowMs);
    const existing = this.seen.get(requestId);
    return existing !== undefined && nowMs - existing < this.ttlMs;
  }

  markAccepted(requestId: string, nowMs: number = Date.now()): void {
    this.prune(nowMs);
    this.seen.set(requestId, nowMs);
  }

  private prune(nowMs: number): void {
    for (const [id, ts] of this.seen.entries()) {
      if (nowMs - ts >= this.ttlMs) {
        this.seen.delete(id);
      }
    }
  }
}
