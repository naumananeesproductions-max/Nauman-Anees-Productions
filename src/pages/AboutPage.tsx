import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EXPERIENCE_COUNTERS, STUDIO_ASSETS } from '../data/studioData';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { StudioLink } from '../components/StudioLink';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="About Nauman Anees Productions"
        title="MORE THAN SIX DECADES. ONE CREATIVE LEGACY."
        subtitle="Your One-Stop Media Solution—uniting multi-generational Pakistani filmmaking heritage with modern cinema production, music, post-production, VFX, animation, and entertainment."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        image={STUDIO_ASSETS.heroCinemaStudio}
        imageAlt="Nauman Anees Productions soundstage"
      />

      <section className="py-16 sm:py-24 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A25D]">
              Our Identity &amp; Purpose
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE6]">
              Building the Next Era of Pakistani Cinema
            </h2>
            <p className="text-base text-[#B8AEA0] leading-relaxed">
              Founded and creatively led by Daniyal Nauman in Pakistan, Nauman Anees Productions
              honors a rich family heritage spanning over 60 years of contribution to Pakistani
              cinema, television, and music.
            </p>
            <p className="text-base text-[#B8AEA0] leading-relaxed">
              Inspired by the foundational film direction of grandfather Anees Bhatti and the
              multi-disciplinary mastery of father Nauman Anees—whose creative expertise extended
              across film direction, professional editing, visual effects, animation, and
              post-production—the studio brings every discipline together under one roof.
            </p>
            <div className="pt-3 flex flex-wrap gap-4">
              <StudioLink
                to="/legacy"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] rounded"
              >
                Explore Three Generations
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </StudioLink>
              <StudioLink
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5EFE6] border border-[#C9A25D]/40 rounded hover:border-[#C9A25D]"
              >
                View Studio Services
              </StudioLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <MediaFrame
              src={STUDIO_ASSETS.filmDramaProduction}
              alt="Film production crew on set"
              className="rounded-lg aspect-[4/3] border border-[#C9A25D]/20"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D090B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERIENCE_COUNTERS.map((c) => (
              <div key={c.label} className="p-6 rounded-lg bg-[#120E10] border border-white/10">
                <p className="font-display text-4xl font-semibold text-[#DFBE7E] tabular-nums">
                  {c.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#B8AEA0]">{c.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#B8AEA0]/80">
            Counters represent family-affiliated historical industry figures rather than
            independently audited current-company credits.
          </p>
        </div>
      </section>
    </div>
  );
};
