import React from 'react';
import { CONTACT_INFO } from '../data/studioData';
import { PageHero } from '../components/PageHero';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="Studio Governance"
        title="PRIVACY POLICY"
        subtitle="How Nauman Anees Productions collects, transmits, and safeguards project booking inquiries, event briefs, contact messages, and talent applications."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />

      <section className="py-16 sm:py-24 bg-[#080607]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-[#B8AEA0] leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#F5EFE6] mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit a Service Booking, Event Booking, Talent Application, or General
              Contact inquiry, we collect only the contact details and project or creative
              information you voluntarily provide in the form.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#F5EFE6] mb-2">
              2. How Your Submissions Are Processed
            </h2>
            <p>
              Form submissions are transmitted securely over HTTPS through our server-side endpoint
              to our studio coordination records so our team can review your brief, verify schedule
              availability, and contact you directly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#F5EFE6] mb-2">
              3. Applicants Under 18
            </h2>
            <p>
              Talent applications submitted for individuals under 18 years of age require explicit
              parent or legal guardian identification, contact information, and consent prior to
              review.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#F5EFE6] mb-2">
              4. Inquiries &amp; Data Requests
            </h2>
            <p>
              To update or request removal of a submitted inquiry, please reach us at{' '}
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#DFBE7E] underline">
                {CONTACT_INFO.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
