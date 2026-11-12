import React from 'react';
import { ChevronRight } from 'lucide-react';
import { StudioLink } from './StudioLink';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker,
  title,
  subtitle,
  breadcrumbs,
  image,
  imageAlt,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-[#C9A25D]/15 bg-[#080607]">
      {image && (
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt || ''}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080607] via-[#080607]/80 to-[#080607]/65" />
        </div>
      )}

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#B8AEA0]">
            {breadcrumbs.map((crumb, idx) => (
              <li key={crumb.label} className="inline-flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#C9A25D]/60" aria-hidden="true" />}
                {crumb.to ? (
                  <StudioLink to={crumb.to} className="hover:text-[#DFBE7E] transition-colors">
                    {crumb.label}
                  </StudioLink>
                ) : (
                  <span className="text-[#DFBE7E]">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="text-xs uppercase tracking-[0.26em] text-[#C9A25D] font-medium mb-3">
          {kicker}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#F5EFE6] max-w-4xl leading-[1.08] [text-wrap:balance]">
          {title}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#B8AEA0] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
