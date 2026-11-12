import React, { useEffect, useMemo, useState } from 'react';
import { AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import type { DynamicFieldConfig, SubmissionType } from '../types/studio';
import {
  buildSubmissionPayload,
  generateRequestId,
  validateSubmissionPayload,
} from '../utils/submission';
import { useRouter } from '../context/RouterContext';
import { CinematicConfirmation } from './CinematicConfirmation';

interface DynamicBookingFormProps {
  submissionType: SubmissionType;
  category: string;
  selectedService: string;
  availableServices?: string[];
  onServiceChange?: (nextService: string) => void;
  fields: DynamicFieldConfig[];
  submitLabel?: string;
  appointmentNotice?: string;
}

export const DynamicBookingForm: React.FC<DynamicBookingFormProps> = ({
  submissionType,
  category,
  selectedService,
  availableServices,
  onServiceChange,
  fields,
  submitLabel = 'Submit Booking Request',
  appointmentNotice = 'Preferred dates are saved for manual team review and confirmed directly by our studio coordinators.',
}) => {
  const { pathname } = useRouter();
  const [values, setValues] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedId, setConfirmedId] = useState<string | null>(null);
  const [pendingRequestId, setPendingRequestId] = useState<string>(() => generateRequestId());

  useEffect(() => {
    setFieldErrors({});
    setSubmitError(null);
  }, [selectedService]);

  const visibleFields = useMemo(
    () =>
      fields.filter(
        (f) => !f.relevantServices || f.relevantServices.includes(selectedService)
      ),
    [fields, selectedService]
  );

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const executeSubmit = async () => {
    setSubmitError(null);

    const payload = buildSubmissionPayload({
      type: submissionType,
      requestId: pendingRequestId,
      category,
      selectedService,
      sourcePage: pathname,
      honeypot,
      formValues: values,
    });

    const validation = validateSubmissionPayload(payload);
    if (!validation.valid) {
      setFieldErrors(validation.errors);
      setSubmitError('Please review the highlighted required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        requestId?: string;
        error?: string;
      } | null;

      if (response.ok && result && result.success === true) {
        setConfirmedId(result.requestId || pendingRequestId);
        return;
      }

      setSubmitError(
        result?.error ||
          'We could not complete your submission right now. Your answers are preserved below—please retry.'
      );
    } catch {
      setSubmitError(
        'Network interruption while reaching the studio server. Your answers are preserved—please click Retry.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void executeSubmit();
  };

  const handleReset = () => {
    setValues({});
    setConfirmedId(null);
    setSubmitError(null);
    setFieldErrors({});
    setPendingRequestId(generateRequestId());
  };

  if (confirmedId) {
    return (
      <CinematicConfirmation
        requestId={confirmedId}
        selectedService={selectedService}
        onReset={handleReset}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#120E10] border border-[#C9A25D]/20 rounded-lg p-6 sm:p-8 space-y-6"
    >
      {/* Honeypot anti-spam trap */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`hp-${category}`}>Leave this field empty</label>
        <input
          id={`hp-${category}`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Selected Service Switcher when multiple sub-services exist */}
      {availableServices && availableServices.length > 0 && onServiceChange ? (
        <div>
          <label
            htmlFor="selected-service-select"
            className="block text-xs font-semibold uppercase tracking-wider text-[#DFBE7E] mb-2"
          >
            Selected Service *
          </label>
          <select
            id="selected-service-select"
            value={selectedService}
            onChange={(e) => onServiceChange(e.target.value)}
            className="w-full bg-[#080607] border border-[#C9A25D]/35 rounded px-4 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D]"
          >
            {availableServices.map((srv) => (
              <option key={srv} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="pb-4 border-b border-white/10">
          <p className="text-xs uppercase tracking-[0.18em] text-[#C9A25D]">
            {category}
          </p>
          <p className="font-display text-2xl font-semibold text-[#F5EFE6] mt-1">
            {selectedService}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {visibleFields.map((field) => {
          const isWide = field.type === 'textarea';
          const errorMsg = fieldErrors[field.name];
          const inputId = `field-${submissionType}-${field.name}`;

          return (
            <div key={field.name} className={isWide ? 'sm:col-span-2' : ''}>
              <label
                htmlFor={inputId}
                className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
              >
                {field.label}
                {field.required && <span className="text-[#C9A25D] ml-1">*</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  id={inputId}
                  rows={3}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D] ${
                    errorMsg ? 'border-red-400' : 'border-white/15'
                  }`}
                />
              ) : field.type === 'select' ? (
                <select
                  id={inputId}
                  required={field.required}
                  value={values[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D] ${
                    errorMsg ? 'border-red-400' : 'border-white/15'
                  }`}
                >
                  <option value="">Select an option...</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={inputId}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D] ${
                    errorMsg ? 'border-red-400' : 'border-white/15'
                  }`}
                />
              )}

              {field.helperText && (
                <p className="mt-1.5 text-xs text-[#B8AEA0]">{field.helperText}</p>
              )}
              {errorMsg && (
                <p className="mt-1.5 text-xs text-red-400" role="alert">
                  {errorMsg}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {appointmentNotice && (
        <p className="text-xs text-[#B8AEA0] leading-relaxed">{appointmentNotice}</p>
      )}

      {submitError && (
        <div
          role="alert"
          className="p-4 rounded bg-[#3B060D]/70 border border-red-400/50 text-sm text-[#F5EFE6] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-300 mt-0.5 shrink-0" />
            <span>{submitError}</span>
          </div>
          <button
            type="button"
            onClick={() => void executeSubmit()}
            disabled={isSubmitting}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#C9A25D] text-[#080607] rounded hover:bg-[#DFBE7E] shrink-0 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] hover:from-[#DFBE7E] hover:to-[#E8CFA0] rounded transition-all cursor-pointer disabled:opacity-60"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isSubmitting ? 'Submitting Request...' : submitLabel}
        </button>
      </div>
    </form>
  );
};
