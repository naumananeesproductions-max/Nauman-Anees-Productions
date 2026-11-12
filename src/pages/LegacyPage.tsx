import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LEGACY_PROFILES, STUDIO_ASSETS } from '../data/studioData';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { StudioLink } from '../components/StudioLink';

interface LegacyPageProps {
  profileSlug?: string;
}

export const LegacyPage: React.FC<LegacyPageProps> = ({ profileSlug }) => {
  if (profileSlug) {
    const profile = LEGACY_PROFILES.find((p) => p.slug === profileSlug) ?? LEGACY_PROFILES[1];

    return (
      <div>
        <PageHero
          kicker={`${profile.titleBadge} · ${profile.relationship}`}
          title={profile.headline}
          subtitle={profile.positioningStatement}
          breadcrumbs={[
            { label: 'Home', to: '/' },
            { label: 'Legacy', to: '/legacy' },
            { label: profile.name },
          ]}
        />

        <section className="py-16 sm:py-24 bg-[#080607]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Portrait & Role Card */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="rounded-lg overflow-hidden border border-[#C9A25D]/30 bg-[#120E10]">
                <MediaFrame
                  src={profile.portrait}
                  alt={profile.portraitAlt}
                  className="aspect-[4/5] w-full"
                  imgClassName="w-full h-full object-cover object-top"
                  priority
                />
                <div className="p-6 space-y-2 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A25D]">
                    {profile.era}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-[#F5EFE6]">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-[#DFBE7E] leading-relaxed">{profile.role}</p>
                </div>
              </div>

              {profile.notableWorks && (
                <div className="p-6 rounded-lg bg-[#120E10] border border-white/10">
                  <h3 className="font-display text-xl font-semibold text-[#DFBE7E] mb-3">
                    Notable Associations
                  </h3>
                  <ul className="space-y-2 text-sm text-[#B8AEA0]">
                    {profile.notableWorks.map((item) => (
                      <li key={item} className="pb-2 border-b border-white/5 last:border-0 last:pb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {profile.disciplines && (
                <div className="p-6 rounded-lg bg-[#120E10] border border-white/10">
                  <h3 className="font-display text-xl font-semibold text-[#DFBE7E] mb-3">
                    Creative &amp; Studio Disciplines
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 text-sm text-[#B8AEA0]">
                    {profile.disciplines.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>

            {/* Biographical Sections */}
            <div className="lg:col-span-8 space-y-10">
              <div className="p-6 sm:p-8 rounded-lg bg-[#120E10] border border-[#C9A25D]/25">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A25D] mb-2">
                  Profile Summary
                </p>
                <p className="text-base sm:text-lg text-[#F5EFE6]/90 leading-relaxed">
                  {profile.summary}
                </p>
              </div>

              {profile.slug === 'nauman-anees' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MediaFrame
                    src={STUDIO_ASSETS.videoPostVfx}
                    alt="Film editing, color grading, VFX, and animation workstation"
                    className="aspect-[16/10] rounded-lg border border-white/10"
                  />
                  <MediaFrame
                    src={STUDIO_ASSETS.filmDramaProduction}
                    alt="Television drama and film production studio"
                    className="aspect-[16/10] rounded-lg border border-white/10"
                  />
                </div>
              )}

              <div className="space-y-8">
                {profile.sections.map((section) => (
                  <article
                    key={section.heading}
                    className="pb-8 border-b border-white/10 last:border-0"
                  >
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mb-3">
                      {section.heading}
                    </h3>
                    <div className="space-y-3 text-base text-[#B8AEA0] leading-relaxed">
                      {section.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    {section.highlight && (
                      <p className="mt-4 p-4 rounded bg-[#120E10] border border-[#C9A25D]/25 text-xs text-[#DFBE7E] leading-relaxed">
                        {section.highlight}
                      </p>
                    )}
                  </article>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <StudioLink
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] rounded"
                >
                  Start a Project with Our Studio
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </StudioLink>
                <StudioLink
                  to="/legacy"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5EFE6] border border-white/20 rounded hover:border-[#C9A25D]"
                >
                  All Three Generations
                </StudioLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        kicker="Three Generations of Filmmaking"
        title="MORE THAN SIX DECADES. ONE CREATIVE LEGACY."
        subtitle="From Anees Bhatti's directing foundations to Nauman Anees — The Creative Visionary and Daniyal Nauman's modern integrated production house."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Legacy' }]}
        image={STUDIO_ASSETS.filmDramaProduction}
        imageAlt="Cinema production heritage"
      />

      <section className="py-16 sm:py-24 bg-[#080607]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {LEGACY_PROFILES.map((person, idx) => (
            <div
              key={person.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-lg bg-[#120E10] border border-white/10"
            >
              <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <MediaFrame
                  src={person.portrait}
                  alt={person.portraitAlt}
                  className="aspect-[4/5] rounded-lg border border-[#C9A25D]/25"
                  imgClassName="w-full h-full object-cover object-top"
                />
              </div>
              <div className={`lg:col-span-8 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D]">
                  {person.titleBadge} · {person.relationship}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
                  {person.headline}
                </h2>
                <p className="text-sm font-medium text-[#DFBE7E]">{person.role}</p>
                <p className="text-base text-[#B8AEA0] leading-relaxed">
                  {person.positioningStatement}
                </p>
                <p className="text-sm text-[#B8AEA0] leading-relaxed">{person.summary}</p>
                <div className="pt-2">
                  <StudioLink
                    to={person.route}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] rounded"
                  >
                    View {person.name}&apos;s Full Profile
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </StudioLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
