import React, { useState } from 'react';
import { Check } from 'lucide-react';
import {
  POST_PRODUCTION_DYNAMIC_FIELDS,
  POST_PRODUCTION_SERVICES,
  STUDIO_ASSETS,
} from '../data/studioData';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

export const VideoPostProductionPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(POST_PRODUCTION_SERVICES[0].name);

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    document.getElementById('post-booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <PageHero
        kicker="Editing · Color · VFX · Animation"
        title="VIDEO POST-PRODUCTION"
        subtitle="Nine specialized finishing suites—honouring Nauman Anees's multi-disciplinary mastery across film editing, visual effects, green screen, animation, and cinematic color grading."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Video Post-Production' },
        ]}
        image={STUDIO_ASSETS.videoPostVfx}
        imageAlt="Color grading and VFX suite"
      />

      <section className="py-16 sm:py-24 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Finishing &amp; Visual Effects Suites
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Select a Post-Production Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POST_PRODUCTION_SERVICES.map((srv, idx) => {
              const isSelected = selectedService === srv.name;
              return (
                <article
                  key={srv.id}
                  className={`rounded-lg overflow-hidden bg-[#120E10] border transition-colors flex flex-col justify-between ${
                    isSelected ? 'border-[#C9A25D]' : 'border-white/10 hover:border-[#C9A25D]/40'
                  }`}
                >
                  <div>
                    <MediaFrame src={srv.image} alt={srv.imageAlt} className="aspect-[16/10]" />
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.15em] text-[#C9A25D]">
                        {String(idx + 1).padStart(2, '0')}. {srv.tagline}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-[#F5EFE6] mt-2">
                        {srv.name}
                      </h3>
                      <p className="mt-2.5 text-sm text-[#B8AEA0] leading-relaxed">
                        {srv.description}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-xs text-[#F5EFE6]/85">
                        {srv.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C9A25D] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button
                      type="button"
                      onClick={() => handleBookService(srv.name)}
                      className={`w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.14em] rounded transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] text-[#080607]'
                          : 'border border-[#C9A25D]/45 text-[#DFBE7E] hover:bg-[#6B0F1A]/40 hover:border-[#C9A25D]'
                      }`}
                    >
                      Book This Service
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="post-booking-form" className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Technical Specifications &amp; Booking
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Book {selectedService}
            </h2>
            <p className="mt-2 text-sm text-[#B8AEA0]">
              Dynamic fields automatically tailor to{' '}
              <span className="text-[#DFBE7E]">{selectedService}</span>.
            </p>
          </div>

          <DynamicBookingForm
            submissionType="service_booking"
            category="Video Post-Production"
            selectedService={selectedService}
            availableServices={POST_PRODUCTION_SERVICES.map((s) => s.name)}
            onServiceChange={setSelectedService}
            fields={POST_PRODUCTION_DYNAMIC_FIELDS}
            submitLabel="Submit Post-Production Request"
          />
        </div>
      </section>
    </div>
  );
};
