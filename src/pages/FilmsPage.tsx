import React, { useState } from 'react';
import { STUDIO_ASSETS } from '../data/studioData';
import type { DynamicFieldConfig } from '../types/studio';
import { PageHero } from '../components/PageHero';
import { DynamicBookingForm } from '../components/DynamicBookingForm';

const FILM_CATEGORIES = ['Feature Film Production', 'Short Film Production'];

const FILM_FIELDS: DynamicFieldConfig[] = [
  { name: 'filmTitle', label: 'Film Title (or Working Title)', type: 'text', required: true, placeholder: 'Title of the film' },
  {
    name: 'genre',
    label: 'Genre',
    type: 'select',
    options: ['Drama', 'Thriller / Mystery', 'Romance', 'Action', 'Comedy', 'Historical / Period', 'Documentary', 'Experimental / Festival'],
  },
  { name: 'fullName', label: 'Producer / Filmmaker Name', type: 'text', required: true, placeholder: 'Your full name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: true, placeholder: '+92 300 0000000' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Pakistan' },
  { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Lahore / Karachi' },
  {
    name: 'screenplayAvailability',
    label: 'Screenplay Availability',
    type: 'select',
    options: ['Final Draft Screenplay Ready', 'First Draft / Treatment Ready', 'Concept Stage — Need Screenwriter'],
  },
  {
    name: 'projectStage',
    label: 'Current Project Stage',
    type: 'select',
    options: ['Development / Pre-Production', 'Ready to Shoot', 'In Production', 'Post-Production / Finishing Only'],
  },
  { name: 'runtime', label: 'Estimated Runtime', type: 'text', placeholder: 'e.g., 120 minutes or 18 minutes' },
  { name: 'castCrewRequirements', label: 'Cast & Crew Requirements', type: 'text', placeholder: 'Lead actors, DOP, art department, stunts...' },
  { name: 'productionRequirements', label: 'Production Requirements', type: 'textarea', placeholder: 'Direction, camera package, sound recording, locations...' },
  { name: 'postProductionRequirements', label: 'Post-Production Requirements', type: 'textarea', placeholder: 'Offline/online edit, DI color grading, theatrical mix, DCP...' },
  { name: 'vfxAnimation', label: 'VFX & Animation Scope', type: 'text', placeholder: 'Set extensions, CGI, title animation...' },
  { name: 'preferredDate', label: 'Target Shoot Date', type: 'date' },
  { name: 'deadline', label: 'Target Delivery / Festival Schedule', type: 'date' },
  { name: 'budget', label: 'Estimated Budget', type: 'text', placeholder: 'e.g., PKR 2,500,000 or USD 15,000' },
  { name: 'referenceLinks', label: 'Pitch Deck / Reference Links (Optional)', type: 'url', placeholder: 'https://...' },
  { name: 'additionalInformation', label: 'Project Synopsis & Description', type: 'textarea', placeholder: 'Share your logline, artistic ambition, and collaboration goals...' },
];

export const FilmsPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(FILM_CATEGORIES[0]);

  return (
    <div>
      <PageHero
        kicker="Narrative Cinema Division"
        title="FILMS & SHORT FILMS"
        subtitle="Carrying forward three generations of Pakistani cinema direction and finishing—partnering with producers, writers, and independent auteurs from screenplay to theatrical master."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Films & Short Films' },
        ]}
        image={STUDIO_ASSETS.heroCinemaStudio}
        imageAlt="Feature film cinema camera dolly rig on soundstage"
      />

      <section className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D] mb-2">
              Cinema Production Brief
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Book Film or Short Film Production
            </h2>
          </div>

          <DynamicBookingForm
            submissionType="service_booking"
            category="Films & Short Films"
            selectedService={selectedService}
            availableServices={FILM_CATEGORIES}
            onServiceChange={setSelectedService}
            fields={FILM_FIELDS}
            submitLabel="Submit Film Project Brief"
          />
        </div>
      </section>
    </div>
  );
};
