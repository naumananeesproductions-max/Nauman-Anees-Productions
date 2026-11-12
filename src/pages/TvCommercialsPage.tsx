import React, { useState } from 'react';
import { STUDIO_ASSETS } from '../data/studioData';
import type { DynamicFieldConfig } from '../types/studio';
import { PageHero } from '../components/PageHero';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

const TV_COMMERCIAL_SERVICES = [
  'TV Commercial Production',
  'Digital Advertising',
  'Brand Commercials',
  'Product Videos',
  'Corporate Videos',
  'Promotional Videos',
];

const TV_COMMERCIAL_FIELDS: DynamicFieldConfig[] = [
  { name: 'companyName', label: 'Company / Brand Name', type: 'text', required: true, placeholder: 'Organization or brand name' },
  { name: 'fullName', label: 'Contact Person Name', type: 'text', required: true, placeholder: 'Your full name' },
  { name: 'email', label: 'Business Email', type: 'email', required: true, placeholder: 'name@company.com' },
  { name: 'whatsapp', label: 'WhatsApp / Direct Phone', type: 'tel', required: true, placeholder: '+92 300 0000000' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Pakistan' },
  { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Karachi / Lahore / Islamabad' },
  { name: 'productOrService', label: 'Product or Service Being Advertised', type: 'text', required: true, placeholder: 'e.g., Luxury Fragrance / Fintech App' },
  {
    name: 'platform',
    label: 'Primary Distribution Platform(s)',
    type: 'select',
    options: ['National Television (TVC)', 'Digital & Social Media (DVC)', 'Cinema Pre-Roll & Broadcast', 'Corporate Internal / Investor Showcase', 'Multi-Platform Campaign'],
  },
  { name: 'duration', label: 'Target Ad Duration', type: 'text', placeholder: 'e.g., 30s + 15s cutdowns' },
  {
    name: 'scriptAvailability',
    label: 'Script / Creative Concept Status',
    type: 'select',
    options: ['Need Agency Script & Concept from Studio', 'Have Brand Brief Only', 'Approved Script Ready to Shoot'],
  },
  { name: 'shootRequirements', label: 'Shoot & Production Requirements', type: 'textarea', placeholder: 'Studio set, celebrity/talent casting, food/product tabletop, 3D packshot...' },
  { name: 'location', label: 'Preferred Shoot Location(s)', type: 'text', placeholder: 'Studio stage, retail space, outdoor...' },
  { name: 'deliverables', label: 'Required Deliverables', type: 'text', placeholder: '16:9 Broadcast Master, 9:16 Reels/TikTok cuts, clean stems...' },
  { name: 'preferredDate', label: 'Preferred Briefing / Shoot Date', type: 'date' },
  { name: 'deadline', label: 'Campaign Launch Deadline', type: 'date' },
  { name: 'budget', label: 'Estimated Campaign Budget', type: 'text', placeholder: 'e.g., PKR 800,000' },
  { name: 'referenceLinks', label: 'Reference Links (Optional)', type: 'url', placeholder: 'https://...' },
  { name: 'additionalInformation', label: 'Project Description & Objectives', type: 'textarea', placeholder: 'Target audience, key message, and campaign goals...' },
];

export const TvCommercialsPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(TV_COMMERCIAL_SERVICES[0]);

  return (
    <div>
      <PageHero
        kicker="Brand & Advertising Division"
        title="TV COMMERCIALS & ADVERTISING"
        subtitle="Bespoke broadcast TVCs, digital campaigns, luxury product films, and corporate brand storytelling engineered for visual authority."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'TV Commercials & Advertising' },
        ]}
        image={STUDIO_ASSETS.filmDramaProduction}
        imageAlt="Commercial film production set"
      />

      <section className="py-16 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TV_COMMERCIAL_SERVICES.map((srv, idx) => {
              const active = selectedService === srv;
              return (
                <button
                  key={srv}
                  type="button"
                  onClick={() => {
                    setSelectedService(srv);
                    document.getElementById('tvc-booking-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-left p-6 rounded-lg border transition-all cursor-pointer ${
                    active
                      ? 'bg-[#6B0F1A]/35 border-[#C9A25D]'
                      : 'bg-[#120E10] border-white/10 hover:border-[#C9A25D]/45'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#C9A25D]">
                    {String(idx + 1).padStart(2, '0')}. Commercial Service
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-[#F5EFE6] mt-2">{srv}</h2>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#DFBE7E]">
                    Book {srv} →
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tvc-booking-form" className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Campaign Brief
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Request Commercial Production
            </h2>
          </div>

          <DynamicBookingForm
            submissionType="service_booking"
            category="TV Commercials & Advertising"
            selectedService={selectedService}
            availableServices={TV_COMMERCIAL_SERVICES}
            onServiceChange={setSelectedService}
            fields={TV_COMMERCIAL_FIELDS}
            submitLabel="Submit Commercial Brief"
          />
        </div>
      </section>
    </div>
  );
};
