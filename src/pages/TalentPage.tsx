import React, { useEffect, useState } from 'react';
import {
  STUDIO_ASSETS,
  TALENT_APPLICATION_CATEGORIES,
  TALENT_DISCOVERY_CARDS,
} from '../data/studioData';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { TalentApplicationForm } from '../components/TalentApplicationForm';

export const TalentPage: React.FC = () => {
  const { queryParams } = useRouter();
  const categoryParam = queryParams.get('category') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(
    TALENT_APPLICATION_CATEGORIES.includes(
      categoryParam as (typeof TALENT_APPLICATION_CATEGORIES)[number]
    )
      ? categoryParam
      : 'Singers'
  );

  useEffect(() => {
    if (
      categoryParam &&
      TALENT_APPLICATION_CATEGORIES.includes(
        categoryParam as (typeof TALENT_APPLICATION_CATEGORIES)[number]
      )
    ) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCardSelect = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    document.getElementById('talent-application-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div>
      <PageHero
        kicker="Join Our Talent Network"
        title="EVERY GREAT STAR HAS A BEGINNING."
        subtitle="We believe talent deserves opportunity. Nauman Anees Productions welcomes passionate emerging artists and creative professionals who want to build their careers in the entertainment industry."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Join Our Talent Network' }]}
        image={STUDIO_ASSETS.talentStageSpotlight}
        imageAlt="Luxury audition stage with warm spotlight"
      />

      {/* Quick Category Selector Cards */}
      <section className="py-12 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A25D]">
                Select Your Creative Path
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mt-1">
                Who We Welcome
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#DFBE7E]">
              New to the industry? No professional experience is required to submit your application.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TALENT_DISCOVERY_CARDS.map((card) => {
              const active = selectedCategory === card.categoryValue;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => handleCardSelect(card.categoryValue)}
                  className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                    active
                      ? 'bg-[#6B0F1A]/50 border-[#C9A25D] text-[#F5EFE6]'
                      : 'bg-[#120E10] border-white/10 text-[#B8AEA0] hover:border-[#C9A25D]/45 hover:text-[#F5EFE6]'
                  }`}
                >
                  <span className="block font-display text-lg font-semibold">
                    {card.cardTitle}
                  </span>
                  <span className="block text-[11px] uppercase tracking-wider text-[#C9A25D] mt-1">
                    {active ? 'Selected' : 'Select Category'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simplified Talent Application Form */}
      <section id="talent-application-form" className="py-16 sm:py-24 bg-[#0D090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TalentApplicationForm initialCategory={selectedCategory} />
        </div>
      </section>
    </div>
  );
};
