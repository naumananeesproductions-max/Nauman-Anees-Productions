import React from 'react';
import { STUDIO_ASSETS } from '../data/studioData';
import type { DynamicFieldConfig } from '../types/studio';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

const TV_DRAMA_FIELDS: DynamicFieldConfig[] = [
  { name: 'dramaName', label: 'Project / Drama Name', type: 'text', required: true, placeholder: 'Working or final serial title' },
  { name: 'productionCompany', label: 'Production Company / Network', type: 'text', placeholder: 'Production house or channel name' },
  { name: 'fullName', label: 'Contact Person Name', type: 'text', required: true, placeholder: 'Producer or executive name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'producer@company.com' },
  { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: true, placeholder: '+92 300 0000000' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Pakistan' },
  { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Karachi / Lahore' },
  { name: 'numberOfEpisodes', label: 'Number of Episodes', type: 'number', placeholder: 'e.g., 26' },
  { name: 'episodeDuration', label: 'Episode Duration', type: 'text', placeholder: 'e.g., 38 minutes' },
  {
    name: 'scriptAvailability',
    label: 'Script Availability',
    type: 'select',
    options: ['Complete Script Ready', 'Pilot & Episodic Outline Ready', 'Need Script & Story Development'],
  },
  { name: 'productionRequirements', label: 'On-Set Production Requirements', type: 'textarea', placeholder: 'Full shoot execution, direction, camera/lighting crew, OST song...' },
  { name: 'postProductionRequirements', label: 'Post-Production Scope', type: 'textarea', placeholder: 'Full episodic pipeline or specific post services' },
  { name: 'editingDetails', label: 'Editing Requirements', type: 'text', placeholder: 'Offline assembly, promo cuts, broadcast master...' },
  { name: 'colorGradingDetails', label: 'Color Grading Requirements', type: 'text', placeholder: 'Broadcast Rec.709 grading, look consistency...' },
  { name: 'vfxAnimationDetails', label: 'VFX / Title Animation Requirements', type: 'text', placeholder: 'Main title sequence, green screen, scene cleanup...' },
  { name: 'preferredDate', label: 'Preferred Production Start Date', type: 'date' },
  { name: 'projectTimeline', label: 'Project Delivery Timeline', type: 'text', placeholder: 'e.g., 4 months' },
  { name: 'budget', label: 'Estimated Budget', type: 'text', placeholder: 'e.g., Per-episode or total budget' },
  { name: 'additionalInformation', label: 'Project Brief & Notes', type: 'textarea', placeholder: 'Genre, target broadcast window, or channel specifications...' },
];

export const TvDramasPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="Television Division"
        title="TV DRAMAS PRODUCTION"
        subtitle="Drawing upon family roots across 50+ Pakistani television dramas, including flagship PTV and network serials—delivering disciplined direction, episodic editing, color grading, and broadcast finishing."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'TV Dramas' },
        ]}
        image={STUDIO_ASSETS.filmDramaProduction}
        imageAlt="Television drama set with lighting rig and director monitor"
      />

      <section className="py-16 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D]">
              Episodic Storytelling Heritage
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              End-to-End Television Serial &amp; Telefilm Pipelines
            </h2>
            <p className="text-base text-[#B8AEA0] leading-relaxed">
              Television drama is the heartbeat of Pakistani household storytelling. Whether you are
              commissioning full production from principal photography and OST composition or an
              integrated episodic post-production pipeline covering editing, sound, color grading,
              and title animation, our studio is structured for reliable on-schedule broadcast
              delivery.
            </p>
          </div>
          <div className="lg:col-span-5">
            <MediaFrame
              src={STUDIO_ASSETS.videoPostVfx}
              alt="Television drama editing and color grading suite"
              className="aspect-[16/10] rounded-lg border border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Drama Production Inquiry
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Submit a TV Drama Project Brief
            </h2>
          </div>

          <DynamicBookingForm
            submissionType="service_booking"
            category="TV Dramas"
            selectedService="TV Drama Production"
            fields={TV_DRAMA_FIELDS}
            submitLabel="Submit TV Drama Brief"
          />
        </div>
      </section>
    </div>
  );
};
