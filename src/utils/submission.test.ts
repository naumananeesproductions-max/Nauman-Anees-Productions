import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildSubmissionPayload,
  generateRequestId,
  RequestDuplicateGuard,
  validateSubmissionPayload,
  verifyAppsScriptResponse,
} from './submission';

test('generateRequestId formats unique NAP ID with UTC date', () => {
  const id = generateRequestId(new Date('2026-11-12T10:00:00Z'));
  assert.match(id, /^NAP-20261112-[A-Z0-9]{6}$/);
});

test('buildSubmissionPayload preserves exact category, selectedService, and dynamic fields', () => {
  const payload = buildSubmissionPayload({
    type: 'service_booking',
    requestId: 'NAP-20261112-ABC123',
    category: 'Music Production',
    selectedService: 'Mixing & Mastering',
    sourcePage: '/services/music-production',
    formValues: {
      fullName: '  Aarish Khan ',
      email: 'aarish@example.com',
      whatsapp: '+923001234567',
      mixingRequirements: 'Analog warmth with vocal clarity',
    },
  });

  assert.equal(payload.type, 'service_booking');
  assert.equal(payload.category, 'Music Production');
  assert.equal(payload.selectedService, 'Mixing & Mastering');
  assert.equal(payload.data.fullName, 'Aarish Khan');
  assert.equal(payload.data.mixingRequirements, 'Analog warmth with vocal clarity');
  assert.ok(typeof payload.data.submittedAt === 'string');
});

test('talent_application allows empty portfolioLink and requires no removed fields', () => {
  const payload = buildSubmissionPayload({
    type: 'talent_application',
    requestId: 'NAP-20261112-TALENT',
    category: 'Talent Applications',
    selectedService: 'Singers',
    sourcePage: '/talent',
    formValues: {
      fullName: 'Zara Malik',
      email: 'zara@example.com',
      whatsapp: '+923211112233',
      country: 'Pakistan',
      city: 'Lahore',
      ageRange: '18-24',
      talentCategory: 'Singers',
      portfolioLink: '',
      reviewConsent: true,
    },
  });

  const outcome = validateSubmissionPayload(payload);
  assert.equal(outcome.valid, true);
  assert.deepEqual(outcome.errors, {});
});

test('talent_application enforces guardian fields only when ageRange is Under 18', () => {
  const payload = buildSubmissionPayload({
    type: 'talent_application',
    requestId: 'NAP-20261112-MINOR1',
    category: 'Talent Applications',
    selectedService: 'Actors',
    sourcePage: '/talent',
    formValues: {
      fullName: 'Hamza Tariq',
      email: 'hamza@example.com',
      whatsapp: '+923009998877',
      country: 'Pakistan',
      city: 'Karachi',
      ageRange: 'Under 18',
      talentCategory: 'Actors',
      reviewConsent: true,
    },
  });

  const missingGuardian = validateSubmissionPayload(payload);
  assert.equal(missingGuardian.valid, false);
  assert.ok(missingGuardian.errors.guardianName);
  assert.ok(missingGuardian.errors.guardianContact);
  assert.ok(missingGuardian.errors.guardianConsent);
});

test('verifyAppsScriptResponse requires explicit JSON success: true', () => {
  assert.equal(verifyAppsScriptResponse('{"success":true,"row":12}').ok, true);
  assert.equal(verifyAppsScriptResponse('{"success":false,"error":"Bad secret"}').ok, false);
  assert.equal(verifyAppsScriptResponse('<html>302 Moved</html>').ok, false);
  assert.equal(verifyAppsScriptResponse('').ok, false);
});

test('RequestDuplicateGuard blocks duplicate accepted requestIds within TTL', () => {
  const guard = new RequestDuplicateGuard(60_000);
  assert.equal(guard.isDuplicate('NAP-20261112-XYZ999', 1000), false);
  guard.markAccepted('NAP-20261112-XYZ999', 1000);
  assert.equal(guard.isDuplicate('NAP-20261112-XYZ999', 5000), true);
  assert.equal(guard.isDuplicate('NAP-20261112-XYZ999', 70_000), false);
});
