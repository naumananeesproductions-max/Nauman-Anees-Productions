import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_DIRECTORY, STUDIO_ASSETS } from '../data/studioData';
import { PageHero } from '../components/PageHero';
import { StudioLink } from '../components/StudioLink';

export const BookProjectPage: React.FC = () => {
  return (
    <div>
      <PageHero
        kicker="Start Your Production"
        title="BOOK A PROJECT WITH NAUMAN ANEES PRODUCTIONS"
        subtitle="Choose the division tailored to your project so you receive exact, relevant technical questions—or reach out directly for multi-service productions."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Book a Project' }]}
        image={STUDIO_ASSETS.heroCinemaStudio}
        imageAlt="Studio camera rig"
      />

      <section className="py-16 sm:py-24 bg-[#080607]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_DIRECTORY.map((item, idx) => (
              <StudioLink
                key={item.route}
                to={item.route}
                className="group p-7 rounded-lg bg-[#120E10] border border-white/10 hover:border-[#C9A25D]/60 flex flex-col justify-between transition-all"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C9A25D]">
                    {String(idx + 1).padStart(2, '0')}. {item.category}
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mt-2 group-hover:text-[#DFBE7E] transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm text-[#B8AEA0] leading-relaxed">{item.summary}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E]">
                  Open Booking Form
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </StudioLink>
            ))}

            <StudioLink
              to="/talent"
              className="group p-7 rounded-lg bg-[#3B060D]/45 border border-[#C9A25D]/40 hover:border-[#C9A25D] flex flex-col justify-between transition-all"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#DFBE7E]">
                  Emerging Artists
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mt-2">
                  Join Our Talent Network
                </h2>
                <p className="mt-3 text-sm text-[#F5EFE6]/80 leading-relaxed">
                  Are you a singer, actor, model, musician, dancer, writer, director, or content
                  creator? Submit a simple application.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E]">
                Apply Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </StudioLink>
          </div>
        </div>
      </section>
    </div>
  );
};
