import React from 'react';
import { Check } from 'lucide-react';
import { STUDIO_ASSETS } from '../data/studioData';
import type { DynamicFieldConfig } from '../types/studio';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

const VIDEO_PRODUCTION_FIELDS: DynamicFieldConfig[] = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
  { name: 'artistName', label: 'Artist / Performer Name', type: 'text', placeholder: 'Artist or band name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: true, placeholder: '+92 3XX XXXXXXX' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Pakistan' },
  { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Lahore / Karachi / Islamabad' },
  { name: 'songTitle', label: 'Song Title', type: 'text', required: true, placeholder: 'Name of the song' },
  { name: 'demoSongLink', label: 'Demo / Audio Song Link (Optional)', type: 'url', placeholder: 'https://...' },
  {
    name: 'genre',
    label: 'Song Genre / Mood',
    type: 'select',
    options: ['Pop', 'Sufi / Soulful', 'Hip-Hop / Urban', 'Rock / Alternative', 'Romantic / Narrative', 'Upbeat Dance / Club', 'Other'],
  },
  {
    name: 'scriptAvailability',
    label: 'Concept / Storyboard Availability',
    type: 'select',
    options: ['Need Full Concept & Storyboard from Studio', 'Have Rough Idea — Need Direction', 'Complete Script / Treatment Ready'],
  },
  { name: 'videoConcept', label: 'Video Concept / Treatment Idea', type: 'textarea', placeholder: 'Describe your visual direction, narrative, or performance style...' },
  { name: 'shootingLocation', label: 'Preferred Shooting Location(s)', type: 'text', placeholder: 'Studio set, urban, heritage architecture, Northern areas, etc.' },
  { name: 'preferredDate', label: 'Preferred Shoot Date', type: 'date' },
  { name: 'castModelRequirements', label: 'Cast / Model / Dancer Requirements', type: 'text', placeholder: 'Lead co-actor, ensemble dancers, stylists, etc.' },
  { name: 'productionRequirements', label: 'Camera, Lighting & Set Requirements', type: 'textarea', placeholder: 'Cinema camera package, crane/dolly, green screen, custom art set...' },
  { name: 'expectedDuration', label: 'Expected Video Duration', type: 'text', placeholder: 'e.g., 3 minutes 45 seconds' },
  { name: 'budget', label: 'Estimated Budget', type: 'text', placeholder: 'e.g., PKR 350,000' },
  { name: 'referenceLinks', label: 'Visual Reference Links (Optional)', type: 'url', placeholder: 'https://...' },
  { name: 'deadline', label: 'Target Release / Delivery Deadline', type: 'date' },
  { name: 'additionalInformation', label: 'Additional Information', type: 'textarea', placeholder: 'Wardrobe, choreography, or distribution notes...' },
];

export const VideoProductionPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="Cinema & Visual Storytelling"
        title="MUSIC VIDEO PRODUCTION"
        subtitle="One flagship focus: cinematic music video production uniting story treatment, film-grade camera packages, lighting design, direction, and theatrical post-production."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Video Production' },
        ]}
        image={STUDIO_ASSETS.heroCinemaStudio}
        imageAlt="Cinema camera rig and lighting on music video set"
      />

      <section className="py-16 sm:py-24 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D]">
              Flagship Video Service
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F5EFE6]">
              Music Video Production
            </h2>
            <p className="text-base text-[#B8AEA0] leading-relaxed">
              Every song deserves a visual world as unforgettable as its melody. At Nauman Anees
              Productions, our Video Production division focuses squarely on creating iconic music
              videos built on cinema-grade optics, architectural set lighting, and disciplined
              direction.
            </p>
            <ul className="space-y-2.5 text-sm text-[#F5EFE6]/85 pt-2">
              {[
                'Original creative concept, treatment deck, and shot-by-shot storyboard',
                'Cinema camera packages, motorized dolly/gimbal rigs, and dramatic lighting',
                'Location scouting, set art direction, wardrobe styling, and casting coordination',
                'Seamless handoff to our in-house editing, color grading, and VFX team',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C9A25D] mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MediaFrame
              src={STUDIO_ASSETS.heroCinemaStudio}
              alt="ARRI cinema camera on dolly track"
              className="aspect-[4/3] rounded-lg border border-white/10"
            />
            <MediaFrame
              src={STUDIO_ASSETS.filmDramaProduction}
              alt="Film crew and director monitoring scene"
              className="aspect-[4/3] rounded-lg border border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Project Brief &amp; Shoot Reservation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Book Music Video Production
            </h2>
          </div>

          <DynamicBookingForm
            submissionType="service_booking"
            category="Video Production"
            selectedService="Music Video Production"
            fields={VIDEO_PRODUCTION_FIELDS}
            submitLabel="Submit Music Video Brief"
          />
        </div>
      </section>
    </div>
  );
};
