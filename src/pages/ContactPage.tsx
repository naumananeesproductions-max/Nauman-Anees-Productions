import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, STUDIO_ASSETS } from '../data/studioData';
import type { DynamicFieldConfig } from '../types/studio';
import { PageHero } from '../components/PageHero';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

const GENERAL_CONTACT_FIELDS: DynamicFieldConfig[] = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'whatsapp', label: 'Phone / WhatsApp Number', type: 'tel', required: true, placeholder: '+92 3XX XXXXXXX' },
  { name: 'country', label: 'Country', type: 'text', placeholder: 'Pakistan' },
  { name: 'city', label: 'City', type: 'text', placeholder: 'Lahore / Karachi / Islamabad' },
  {
    name: 'subject',
    label: 'Inquiry Subject',
    type: 'select',
    options: [
      'General Studio Inquiry',
      'Film / Drama / Commercial Production',
      'Music Production Consultation',
      'Post-Production & VFX Pipeline',
      'Concert & Artist Booking',
      'Talent Network Question',
    ],
  },
  {
    name: 'message',
    label: 'Your Message',
    type: 'textarea',
    required: true,
    placeholder: 'Tell us how Nauman Anees Productions can assist you...',
  },
];

export const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="Connect With Our Studio"
        title="CONTACT NAUMAN ANEES PRODUCTIONS"
        subtitle="Reach our production coordinators directly via our official phone/WhatsApp line, official business email, or our inquiry form below."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        image={STUDIO_ASSETS.heroCinemaStudio}
        imageAlt="Nauman Anees Productions soundstage"
      />

      <section className="py-16 sm:py-24 bg-[#080607]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* STRICT Contact Info: ONLY Phone/WhatsApp and Business Email */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-lg bg-[#120E10] border border-[#C9A25D]/25 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A25D]">
                  Direct Channels
                </p>
                <h2 className="font-display text-3xl font-semibold text-[#F5EFE6] mt-1">
                  Official Contact Details
                </h2>
              </div>

              <div className="space-y-5 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-[#6B0F1A]/40 border border-[#C9A25D]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#C9A25D]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#B8AEA0]">
                      Official Phone / WhatsApp Number
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-3">
                      <a
                        href={`tel:${CONTACT_INFO.phoneRaw}`}
                        className="text-sm font-medium text-[#F5EFE6] hover:text-[#DFBE7E] transition-colors"
                      >
                        {CONTACT_INFO.phoneWhatsapp}
                      </a>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappDigits}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#DFBE7E] border border-[#C9A25D]/40 rounded hover:border-[#C9A25D] hover:bg-[#6B0F1A]/30 transition-colors"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-[#6B0F1A]/40 border border-[#C9A25D]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#C9A25D]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#B8AEA0]">
                      Official Business Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-medium text-[#DFBE7E] hover:text-[#F5EFE6] break-all mt-1 inline-block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* General Contact Form -> Google Sheets General Contact Tab */}
          <div className="lg:col-span-8">
            <DynamicBookingForm
              submissionType="general_contact"
              category="General Contact"
              selectedService="General Studio Inquiry"
              fields={GENERAL_CONTACT_FIELDS}
              submitLabel="Send Inquiry"
              appointmentNotice="Your inquiry is logged directly for our production team to review and respond shortly."
            />
          </div>
        </div>
      </section>
    </div>
  );
};
