import React from 'react';
import { StudioLink } from '../components/StudioLink';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-[65vh] flex items-center justify-center bg-[#080607] px-4 py-24 text-center">
      <div className="max-w-lg space-y-5">
        <p className="text-xs uppercase tracking-[0.28em] text-[#C9A25D]">Scene Missing · 404</p>
        <h1 className="font-display text-5xl sm:text-6xl font-semibold text-[#F5EFE6]">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#B8AEA0]">
          The reel or page you requested could not be located. Return to our main studio stage to
          explore our legacy, services, and booking forms.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <StudioLink
            to="/"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] rounded"
          >
            Return Home
          </StudioLink>
          <StudioLink
            to="/services"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5EFE6] border border-[#C9A25D]/40 rounded"
          >
            Explore Services
          </StudioLink>
        </div>
      </div>
    </section>
  );
};
