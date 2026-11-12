import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DISCIPLINES, STUDIO_ASSETS } from '../data/studioData';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { StudioLink } from '../components/StudioLink';

export const PortfolioPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="Studio Showcase"
        title="CINEMATIC DISCIPLINES & PRODUCTION CRAFT"
        subtitle="A curated look at the production divisions, studio environments, and multi-generational creative ethos powering Nauman Anees Productions."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]}
        image={STUDIO_ASSETS.videoPostVfx}
        imageAlt="Color grading and post-production studio"
      />

      <section className="py-16 sm:py-24 bg-[#080607]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="p-6 rounded-lg bg-[#120E10] border border-[#C9A25D]/25 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[#C9A25D] mb-2">
              Studio Integrity Notice
            </p>
            <p className="text-sm text-[#B8AEA0] leading-relaxed">
              The imagery showcased below illustrates our studio disciplines and creative
              environments. We never fabricate fictional film posters or unverified third-party
              client credits. For historical family work—including Heer Ranjha, PTV productions, and
              &ldquo;Menu Mar Gaya&rdquo; by AMZ—visit our{' '}
              <StudioLink to="/legacy" className="text-[#DFBE7E] underline hover:text-[#F5EFE6]">
                Three Generations Legacy
              </StudioLink>{' '}
              archive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DISCIPLINES.map((item) => (
              <article
                key={item.id}
                className="rounded-lg overflow-hidden bg-[#120E10] border border-white/10 flex flex-col"
              >
                <MediaFrame src={item.image} alt={item.title} className="aspect-[16/9]" />
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#C9A25D]">
                      {item.category}
                    </p>
                    <h2 className="font-display text-3xl font-semibold text-[#F5EFE6] mt-2">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm text-[#B8AEA0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <StudioLink
                      to={item.route}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E] hover:text-[#F5EFE6]"
                    >
                      {item.ctaLabel}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </StudioLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
