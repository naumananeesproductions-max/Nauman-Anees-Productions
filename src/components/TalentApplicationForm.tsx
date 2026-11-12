import React, { useEffect, useState } from 'react';
import { AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { TALENT_APPLICATION_CATEGORIES } from '../data/studioData';
import {
  buildSubmissionPayload,
  generateRequestId,
  validateSubmissionPayload,
} from '../utils/submission';
import { useRouter } from '../context/RouterContext';
import { CinematicConfirmation } from './CinematicConfirmation';

interface TalentApplicationFormProps {
  initialCategory?: string;
}

export const TalentApplicationForm: React.FC<TalentApplicationFormProps> = ({
  initialCategory = '',
}) => {
  const { pathname } = useRouter();
  const [fullName, setFullName] = useState('');
  const [stageName, setStageName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [talentCategory, setTalentCategory] = useState(initialCategory || 'Singers');
  const [languages, setLanguages] = useState('');
  const [previousExperience, setPreviousExperience] = useState('');
  const [biography, setBiography] = useState('');
  const [socialLinks, setSocialLinks] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');

  // Under-18 guardian fields
  const [guardianName, setGuardianName] = useState('');
  const [guardianContact, setGuardianContact] = useState('');
  const [guardianConsent, setGuardianConsent] = useState(false);

  // Consents
  const [reviewConsent, setReviewConsent] = useState(false);
  const [promoConsent, setPromoConsent] = useState(false);

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedId, setConfirmedId] = useState<string | null>(null);
  const [pendingRequestId, setPendingRequestId] = useState<string>(() => generateRequestId());

  useEffect(() => {
    if (
      initialCategory &&
      TALENT_APPLICATION_CATEGORIES.includes(
        initialCategory as (typeof TALENT_APPLICATION_CATEGORIES)[number]
      )
    ) {
      setTalentCategory(initialCategory);
    }
  }, [initialCategory]);

  const executeSubmit = async () => {
    setSubmitError(null);

    const payload = buildSubmissionPayload({
      type: 'talent_application',
      requestId: pendingRequestId,
      category: 'Talent Applications',
      selectedService: talentCategory,
      sourcePage: pathname,
      honeypot,
      formValues: {
        fullName,
        stageName,
        email,
        whatsapp,
        country,
        city,
        ageRange,
        talentCategory,
        languages,
        previousExperience,
        biography,
        socialLinks,
        portfolioLink,
        additionalInformation,
        guardianName: ageRange === 'Under 18' ? guardianName : '',
        guardianContact: ageRange === 'Under 18' ? guardianContact : '',
        guardianConsent: ageRange === 'Under 18' ? guardianConsent : false,
        reviewConsent,
        promoConsent,
      },
    });

    const outcome = validateSubmissionPayload(payload);
    if (!outcome.valid) {
      setErrors(outcome.errors);
      setSubmitError('Please complete the required applicant fields highlighted below.');
      return;
    }

    setErrors({});
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
          'Unable to reach the Talent Applications sheet right now. Your details are preserved—please click Retry.'
      );
    } catch {
      setSubmitError(
        'Network error during submission. All of your entered information has been preserved—please retry.'
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
    setFullName('');
    setStageName('');
    setEmail('');
    setWhatsapp('');
    setCountry('');
    setCity('');
    setAgeRange('');
    setLanguages('');
    setPreviousExperience('');
    setBiography('');
    setSocialLinks('');
    setPortfolioLink('');
    setAdditionalInformation('');
    setGuardianName('');
    setGuardianContact('');
    setGuardianConsent(false);
    setReviewConsent(false);
    setPromoConsent(false);
    setConfirmedId(null);
    setSubmitError(null);
    setErrors({});
    setPendingRequestId(generateRequestId());
  };

  if (confirmedId) {
    return (
      <CinematicConfirmation
        requestId={confirmedId}
        selectedService={`Talent Application — ${talentCategory}`}
        onReset={handleReset}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#120E10] border border-[#C9A25D]/25 rounded-lg p-6 sm:p-10 space-y-6"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp-talent">Leave empty</label>
        <input
          id="hp-talent"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="pb-4 border-b border-white/10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#C9A25D]">
          Beginner-Friendly Talent Registration
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mt-1">
          Submit Your Talent Application
        </h2>
        <p className="text-sm text-[#B8AEA0] mt-2">
          New to the industry? No professional experience is required to submit your application.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="talent-fullName"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Full Name <span className="text-[#C9A25D]">*</span>
          </label>
          <input
            id="talent-fullName"
            type="text"
            required
            placeholder="Your full legal name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D] ${
              errors.fullName ? 'border-red-400' : 'border-white/15'
            }`}
          />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>}
        </div>

        <div>
          <label
            htmlFor="talent-stageName"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Professional / Stage Name (Optional)
          </label>
          <input
            id="talent-stageName"
            type="text"
            placeholder="Stage name if applicable"
            value={stageName}
            onChange={(e) => setStageName(e.target.value)}
            className="w-full bg-[#080607] border border-white/15 rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D]"
          />
        </div>

        <div>
          <label
            htmlFor="talent-email"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Email Address <span className="text-[#C9A25D]">*</span>
          </label>
          <input
            id="talent-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D] ${
              errors.email ? 'border-red-400' : 'border-white/15'
            }`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label
            htmlFor="talent-whatsapp"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            WhatsApp Number <span className="text-[#C9A25D]">*</span>
          </label>
          <input
            id="talent-whatsapp"
            type="tel"
            required
            placeholder="+92 300 0000000"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D] ${
              errors.whatsapp ? 'border-red-400' : 'border-white/15'
            }`}
          />
          {errors.whatsapp && <p className="mt-1.5 text-xs text-red-400">{errors.whatsapp}</p>}
        </div>

        <div>
          <label
            htmlFor="talent-country"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Country <span className="text-[#C9A25D]">*</span>
          </label>
          <input
            id="talent-country"
            type="text"
            required
            placeholder="Pakistan"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D] ${
              errors.country ? 'border-red-400' : 'border-white/15'
            }`}
          />
          {errors.country && <p className="mt-1.5 text-xs text-red-400">{errors.country}</p>}
        </div>

        <div>
          <label
            htmlFor="talent-city"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            City <span className="text-[#C9A25D]">*</span>
          </label>
          <input
            id="talent-city"
            type="text"
            required
            placeholder="Lahore / Karachi / Islamabad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D] ${
              errors.city ? 'border-red-400' : 'border-white/15'
            }`}
          />
          {errors.city && <p className="mt-1.5 text-xs text-red-400">{errors.city}</p>}
        </div>

        <div>
          <label
            htmlFor="talent-ageRange"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Age Range <span className="text-[#C9A25D]">*</span>
          </label>
          <select
            id="talent-ageRange"
            required
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
            className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D] ${
              errors.ageRange ? 'border-red-400' : 'border-white/15'
            }`}
          >
            <option value="">Select age range...</option>
            <option value="Under 18">Under 18 (Guardian details required)</option>
            <option value="18-24">18 – 24</option>
            <option value="25-34">25 – 34</option>
            <option value="35-44">35 – 44</option>
            <option value="45+">45+</option>
          </select>
          {errors.ageRange && <p className="mt-1.5 text-xs text-red-400">{errors.ageRange}</p>}
        </div>

        <div>
          <label
            htmlFor="talent-category"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Talent Category <span className="text-[#C9A25D]">*</span>
          </label>
          <select
            id="talent-category"
            required
            value={talentCategory}
            onChange={(e) => setTalentCategory(e.target.value)}
            className={`w-full bg-[#080607] border rounded px-4 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D] ${
              errors.talentCategory ? 'border-red-400' : 'border-white/15'
            }`}
          >
            {TALENT_APPLICATION_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.talentCategory && (
            <p className="mt-1.5 text-xs text-red-400">{errors.talentCategory}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="talent-languages"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Languages Spoken / Performed
          </label>
          <input
            id="talent-languages"
            type="text"
            placeholder="e.g., Urdu, Punjabi, English"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            className="w-full bg-[#080607] border border-white/15 rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D]"
          />
        </div>

        <div>
          <label
            htmlFor="talent-experience"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Previous Experience (Optional)
          </label>
          <input
            id="talent-experience"
            type="text"
            placeholder="Beginner / No experience yet, theatre, college, etc."
            value={previousExperience}
            onChange={(e) => setPreviousExperience(e.target.value)}
            className="w-full bg-[#080607] border border-white/15 rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D]"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="talent-biography"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Short Introduction &amp; Ambition
          </label>
          <textarea
            id="talent-biography"
            rows={3}
            placeholder="Tell us about yourself, your passion, and what kind of work you dream of doing..."
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            className="w-full bg-[#080607] border border-white/15 rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D]"
          />
        </div>

        <div>
          <label
            htmlFor="talent-socialLinks"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Social Profile Link (Optional)
          </label>
          <input
            id="talent-socialLinks"
            type="url"
            placeholder="https://... (Optional)"
            value={socialLinks}
            onChange={(e) => setSocialLinks(e.target.value)}
            className="w-full bg-[#080607] border border-white/15 rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D]"
          />
        </div>

        <div>
          <label
            htmlFor="talent-portfolioLink"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Portfolio / Showreel Link (Optional)
          </label>
          <input
            id="talent-portfolioLink"
            type="url"
            placeholder="https://... (Leave blank if you don't have one yet)"
            value={portfolioLink}
            onChange={(e) => setPortfolioLink(e.target.value)}
            className="w-full bg-[#080607] border border-white/15 rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D]"
          />
          <p className="mt-1.5 text-xs text-[#C9A25D]/90">
            Portfolio or showreel is optional. You can submit your application even if you don&apos;t
            have one yet.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="talent-additional"
            className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
          >
            Additional Information (Optional)
          </label>
          <textarea
            id="talent-additional"
            rows={2}
            placeholder="Availability, relocation willingness, or any extra notes..."
            value={additionalInformation}
            onChange={(e) => setAdditionalInformation(e.target.value)}
            className="w-full bg-[#080607] border border-white/15 rounded px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AEA0]/45 focus:outline-none focus:border-[#C9A25D]"
          />
        </div>
      </div>

      {/* Guardian Details when Under 18 */}
      {ageRange === 'Under 18' && (
        <div className="p-5 rounded-md bg-[#080607] border border-[#C9A25D]/35 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7E]">
            Parent / Guardian Details (Required for Applicants Under 18)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="talent-guardianName"
                className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
              >
                Guardian Full Name <span className="text-[#C9A25D]">*</span>
              </label>
              <input
                id="talent-guardianName"
                type="text"
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
                className={`w-full bg-[#120E10] border rounded px-4 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D] ${
                  errors.guardianName ? 'border-red-400' : 'border-white/15'
                }`}
              />
              {errors.guardianName && (
                <p className="mt-1 text-xs text-red-400">{errors.guardianName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="talent-guardianContact"
                className="block text-xs font-medium uppercase tracking-wider text-[#F5EFE6]/85 mb-2"
              >
                Guardian Phone / WhatsApp <span className="text-[#C9A25D]">*</span>
              </label>
              <input
                id="talent-guardianContact"
                type="tel"
                value={guardianContact}
                onChange={(e) => setGuardianContact(e.target.value)}
                className={`w-full bg-[#120E10] border rounded px-4 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D] ${
                  errors.guardianContact ? 'border-red-400' : 'border-white/15'
                }`}
              />
              {errors.guardianContact && (
                <p className="mt-1 text-xs text-red-400">{errors.guardianContact}</p>
              )}
            </div>
          </div>

          <label className="flex items-start gap-3 text-xs text-[#B8AEA0] cursor-pointer">
            <input
              type="checkbox"
              checked={guardianConsent}
              onChange={(e) => setGuardianConsent(e.target.checked)}
              className="mt-0.5 accent-[#C9A25D] w-4 h-4 shrink-0"
            />
            <span>
              I confirm that I am the parent or legal guardian of the applicant and consent to
              submitting this talent application for review.
            </span>
          </label>
          {errors.guardianConsent && (
            <p className="text-xs text-red-400">{errors.guardianConsent}</p>
          )}
        </div>
      )}

      {/* Consent & Disclaimer */}
      <div className="space-y-3 pt-2 border-t border-white/10">
        <label className="flex items-start gap-3 text-xs text-[#F5EFE6]/90 cursor-pointer">
          <input
            type="checkbox"
            checked={reviewConsent}
            onChange={(e) => setReviewConsent(e.target.checked)}
            className="mt-0.5 accent-[#C9A25D] w-4 h-4 shrink-0"
          />
          <span>
            I consent to Nauman Anees Productions reviewing my application details for talent
            discovery and casting consideration. I understand that submitting an application does
            not guarantee selection, representation, or employment.{' '}
            <span className="text-[#C9A25D]">*</span>
          </span>
        </label>
        {errors.reviewConsent && (
          <p className="text-xs text-red-400">{errors.reviewConsent}</p>
        )}

        <label className="flex items-start gap-3 text-xs text-[#B8AEA0] cursor-pointer">
          <input
            type="checkbox"
            checked={promoConsent}
            onChange={(e) => setPromoConsent(e.target.checked)}
            className="mt-0.5 accent-[#C9A25D] w-4 h-4 shrink-0"
          />
          <span>
            (Optional) I also consent to being contacted regarding future studio showcases, casting
            calls, and promotional talent opportunities.
          </span>
        </label>
      </div>

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

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] hover:from-[#DFBE7E] hover:to-[#E8CFA0] rounded transition-all cursor-pointer disabled:opacity-60"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isSubmitting ? 'Submitting Application...' : 'Submit Talent Application'}
        </button>
      </div>
    </form>
  );
};
