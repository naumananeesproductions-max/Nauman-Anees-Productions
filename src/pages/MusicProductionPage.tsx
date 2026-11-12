import React, { useState } from 'react';
import { Check } from 'lucide-react';
import {
  MUSIC_DYNAMIC_FIELDS,
  MUSIC_SERVICES,
  STUDIO_ASSETS,
} from '../data/studioData';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

export const MusicProductionPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(MUSIC_SERVICES[0].name);

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    const formEl = document.getElementById('music-booking-form');
    formEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <PageHero
        kicker="Audio & Recording Division"
        title="MUSIC PRODUCTION & RECORDING STUDIO"
        subtitle="Eight specialized music studio services—from intimate vocal tracking and songwriting to full arrangement, mixing, mastering, and complete song production."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Music Production' },
        ]}
        image={STUDIO_ASSETS.musicStudioConsole}
        imageAlt="Music studio analog-digital mixing console"
      />

      {/* 8 Music Services Grid */}
      <section className="py-16 sm:py-24 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Studio Offerings
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Select a Music Service to Book
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MUSIC_SERVICES.map((srv, idx) => {
              const isSelected = selectedService === srv.name;
              return (
                <article
                  key={srv.id}
                  className={`rounded-lg overflow-hidden bg-[#120E10] border transition-colors flex flex-col justify-between ${
                    isSelected ? 'border-[#C9A25D]' : 'border-white/10 hover:border-[#C9A25D]/40'
                  }`}
                >
                  <div>
                    <MediaFrame
                      src={srv.image}
                      alt={srv.imageAlt}
                      className="aspect-[16/9]"
                    />
                    <div className="p-6 sm:p-7">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#C9A25D]">
                        {String(idx + 1).padStart(2, '0')}. {srv.tagline}
                      </p>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mt-2">
                        {srv.name}
                      </h3>
                      <p className="mt-3 text-sm text-[#B8AEA0] leading-relaxed">
                        {srv.description}
                      </p>
                      <ul className="mt-4 space-y-2 text-xs text-[#F5EFE6]/85">
                        {srv.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C9A25D] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                    <button
                      type="button"
                      onClick={() => handleBookService(srv.name)}
                      className={`w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] rounded transition-all cursor-pointer ${
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

      {/* Dynamic Music Booking Form */}
      <section id="music-booking-form" className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Studio Session Reservation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Book Your Music Production Service
            </h2>
            <p className="mt-2 text-sm text-[#B8AEA0]">
              Only questions relevant to <span className="text-[#DFBE7E]">{selectedService}</span>{' '}
              are shown below. Your exact service selection is preserved in our Service Bookings log.
            </p>
          </div>

          <DynamicBookingForm
            submissionType="service_booking"
            category="Music Production"
            selectedService={selectedService}
            availableServices={MUSIC_SERVICES.map((s) => s.name)}
            onServiceChange={setSelectedService}
            fields={MUSIC_DYNAMIC_FIELDS}
            submitLabel="Submit Music Booking Request"
          />
        </div>
      </section>
    </div>
  );
};
