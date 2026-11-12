import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_DIRECTORY, STUDIO_ASSETS } from '../data/studioData';
import { PageHero } from '../components/PageHero';
import { MediaFrame } from '../components/MediaFrame';
import { StudioLink } from '../components/StudioLink';

export const ServicesOverviewPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="Nauman Anees Productions · Capabilities"
        title="PRODUCTION, MUSIC, VFX & ENTERTAINMENT SERVICES"
        subtitle="Explore our seven integrated divisions—each equipped with dedicated creative specialists and tailored project booking forms."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image={STUDIO_ASSETS.heroCinemaStudio}
        imageAlt="Production stage and camera equipment"
      />

      <section className="py-16 sm:py-24 bg-[#080607]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICE_DIRECTORY.map((srv, idx) => (
            <StudioLink
              key={srv.route}
              to={srv.route}
              className="group rounded-lg overflow-hidden bg-[#120E10] border border-white/10 hover:border-[#C9A25D]/50 flex flex-col transition-all"
            >
              <MediaFrame
                src={srv.image}
                alt={srv.title}
                className="aspect-[16/10]"
                imgClassName="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#C9A25D]">
                    {String(idx + 1).padStart(2, '0')}. {srv.category}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-[#F5EFE6] mt-2 group-hover:text-[#DFBE7E] transition-colors">
                    {srv.title}
                  </h2>
                  <p className="mt-3 text-sm text-[#B8AEA0] leading-relaxed">{srv.summary}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E]">
                  Explore Service &amp; Book
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </StudioLink>
          ))}
        </div>
      </section>
    </div>
  );
};
