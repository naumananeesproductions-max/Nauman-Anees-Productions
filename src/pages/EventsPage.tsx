import React, { useState } from 'react';
import { STUDIO_ASSETS } from '../data/studioData';
import type { DynamicFieldConfig } from '../types/studio';
import { PageHero } from '../components/PageHero';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

const EVENT_SERVICES = [
  'Wedding Concerts',
  'Corporate Events',
  'Private Events',
  'Live Music Shows',
  'Concerts',
  'Special Performances',
  'Entertainment Bookings',
];

const EVENT_BOOKING_FIELDS: DynamicFieldConfig[] = [
  { name: 'clientName', label: 'Client Name', type: 'text', required: true, placeholder: 'Your full name' },
  { name: 'organization', label: 'Organization / Family Host Name', type: 'text', placeholder: 'Company or host name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: true, placeholder: '+92 300 0000000' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Pakistan / UAE / UK / India / etc.' },
  { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Lahore / Karachi / Dubai / London' },
  {
    name: 'eventType',
    label: 'Event Category',
    type: 'select',
    required: true,
    options: EVENT_SERVICES,
  },
  { name: 'eventDate', label: 'Preferred Event Date', type: 'date', required: true },
  { name: 'venue', label: 'Venue Name / Location', type: 'text', placeholder: 'Hotel ballroom, marquee, arena, private estate...' },
  {
    name: 'indoorOutdoor',
    label: 'Setting',
    type: 'select',
    options: ['Indoor', 'Outdoor', 'Hybrid / Covered Pavilion'],
  },
  { name: 'expectedAudience', label: 'Expected Audience Size', type: 'number', placeholder: 'e.g., 500' },
  { name: 'preferredArtist', label: 'Preferred Artist(s) / Singer(s)', type: 'text', placeholder: 'Name preferred Pakistani or Indian artists or open to suggestions' },
  { name: 'performanceDuration', label: 'Expected Performance Duration', type: 'text', placeholder: 'e.g., 60 minutes / 90 minutes' },
  { name: 'stageSoundRequirements', label: 'Stage, Lighting & Sound Requirements', type: 'textarea', placeholder: 'Do you need full concert production & audio rig, or artist management only?' },
  { name: 'budget', label: 'Estimated Entertainment Budget', type: 'text', placeholder: 'e.g., PKR 2,000,000 or USD 15,000' },
  { name: 'additionalInformation', label: 'Additional Event Details', type: 'textarea', placeholder: 'Schedule, travel/hospitality arrangements, or special requests...' },
];

export const EventsPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(EVENT_SERVICES[0]);

  return (
    <div>
      <PageHero
        kicker="Live Entertainment & Artist Management"
        title="MAKE YOUR EVENT UNFORGETTABLE."
        subtitle="Curated live performances and artist bookings across Pakistan and India for wedding concerts, corporate galas, private celebrations, and arena shows."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Concerts & Artist Booking' }]}
      />

      {/* Official Composite Artist Banner — Preserved intact */}
      <section className="bg-[#080607] border-b border-[#C9A25D]/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="rounded-lg overflow-hidden border border-[#C9A25D]/30 bg-[#0D090B] shadow-2xl">
            <img
              src={STUDIO_ASSETS.artistBanner}
              alt="Nauman Anees Productions Concert and Artist Booking composite stage banner featuring live singers and performers"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D]">
                Pakistan &amp; India Artist Access
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
                A Broad Roster Beyond Fixed Boundaries
              </h2>
              <p className="text-base text-[#B8AEA0] leading-relaxed">
                Nauman Anees Productions maintains direct booking access to artists, vocalists,
                bands, and live performers across both Pakistan and India. Our booking service is
                not restricted to a small fixed roster—we can arrange bespoke bookings for a wide
                spectrum of renowned and emerging performers tailored to your event&apos;s stature.
              </p>
              <p className="text-xs text-[#DFBE7E]/90 leading-relaxed">
                Availability Notice: All artist bookings remain subject to individual artist
                calendar availability, formal event agreements, technical rider compliance, and
                written studio confirmation.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-lg bg-[#120E10] border border-white/10">
              <p className="text-xs uppercase tracking-[0.18em] text-[#C9A25D] mb-3">
                Event Formats We Produce
              </p>
              <div className="flex flex-wrap gap-2">
                {EVENT_SERVICES.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => {
                      setSelectedService(srv);
                      document.getElementById('event-booking-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3.5 py-2 text-xs rounded border transition-colors cursor-pointer ${
                      selectedService === srv
                        ? 'bg-[#6B0F1A] border-[#C9A25D] text-[#F5EFE6]'
                        : 'bg-[#080607] border-white/15 text-[#B8AEA0] hover:border-[#C9A25D]/50 hover:text-[#F5EFE6]'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="event-booking-form" className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Event &amp; Artist Reservation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Request Concert &amp; Artist Booking
            </h2>
          </div>

          <DynamicBookingForm
            submissionType="event_booking"
            category="Concert & Artist Booking"
            selectedService={selectedService}
            availableServices={EVENT_SERVICES}
            onServiceChange={setSelectedService}
            fields={EVENT_BOOKING_FIELDS}
            submitLabel="Submit Event Booking Request"
          />
        </div>
      </section>
    </div>
  );
};
