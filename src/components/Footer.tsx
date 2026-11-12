import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, STUDIO_ASSETS } from '../data/studioData';
import { StudioLink } from './StudioLink';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060405] border-t border-[#C9A25D]/20 text-[#F5EFE6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <StudioLink to="/" className="inline-flex items-center gap-3">
              <img
                src={STUDIO_ASSETS.logo}
                alt="Nauman Anees Productions Official Logo"
                className="w-12 h-12 rounded-full object-cover border border-[#C9A25D]/40"
              />
              <div>
                <p className="font-display text-xl font-semibold text-[#F5EFE6]">
                  Nauman Anees Productions
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A25D]">
                  Your One-Stop Media Solution.
                </p>
              </div>
            </StudioLink>
            <p className="text-sm text-[#B8AEA0] leading-relaxed">
              Carrying forward more than 60 years of family filmmaking heritage in Pakistan across
              film direction, music production, post-production, VFX, animation, television, and
              artist discovery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-display text-lg font-semibold text-[#DFBE7E] mb-4">
              Studio &amp; Legacy
            </h2>
            <ul className="space-y-2.5 text-sm text-[#B8AEA0]">
              <li>
                <StudioLink to="/" className="hover:text-[#F5EFE6] transition-colors">
                  Home
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/about" className="hover:text-[#F5EFE6] transition-colors">
                  About Us
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/legacy" className="hover:text-[#F5EFE6] transition-colors">
                  Three Generations Legacy
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/legacy/nauman-anees" className="hover:text-[#F5EFE6] transition-colors">
                  Nauman Anees — The Creative Visionary
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/portfolio" className="hover:text-[#F5EFE6] transition-colors">
                  Portfolio &amp; Craft
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/talent" className="text-[#DFBE7E] hover:text-[#F5EFE6] transition-colors">
                  Join Our Talent Network
                </StudioLink>
              </li>
            </ul>
          </div>

          {/* Service Navigation */}
          <div>
            <h2 className="font-display text-lg font-semibold text-[#DFBE7E] mb-4">
              Production Services
            </h2>
            <ul className="space-y-2.5 text-sm text-[#B8AEA0]">
              <li>
                <StudioLink to="/services/music-production" className="hover:text-[#F5EFE6] transition-colors">
                  Music Production &amp; Recording
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/services/video-production" className="hover:text-[#F5EFE6] transition-colors">
                  Music Video Production
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/services/video-post-production" className="hover:text-[#F5EFE6] transition-colors">
                  Video Editing, VFX &amp; Animation
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/services/tv-commercials" className="hover:text-[#F5EFE6] transition-colors">
                  TV Commercials &amp; Advertising
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/services/tv-dramas" className="hover:text-[#F5EFE6] transition-colors">
                  TV Dramas
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/services/films" className="hover:text-[#F5EFE6] transition-colors">
                  Films &amp; Short Films
                </StudioLink>
              </li>
              <li>
                <StudioLink to="/events" className="hover:text-[#F5EFE6] transition-colors">
                  Concerts &amp; Artist Booking
                </StudioLink>
              </li>
            </ul>
          </div>

          {/* Strict Contact Column: ONLY Phone/WhatsApp & Official Email */}
          <div>
            <h2 className="font-display text-lg font-semibold text-[#DFBE7E] mb-4">
              Official Contact
            </h2>
            <div className="space-y-4 text-sm text-[#B8AEA0]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C9A25D] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#F5EFE6]/70">
                    Phone / WhatsApp
                  </p>
                  <p className="text-[#F5EFE6] mt-0.5">{CONTACT_INFO.phoneWhatsapp}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A25D] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#F5EFE6]/70">
                    Official Business Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-[#F5EFE6] hover:text-[#DFBE7E] transition-colors break-all mt-0.5 inline-block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <StudioLink
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#DFBE7E] border border-[#C9A25D]/40 rounded hover:border-[#C9A25D] hover:bg-[#6B0F1A]/30 transition-colors"
                >
                  Open Inquiry Form
                </StudioLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8AEA0]">
          <p>
            © {new Date().getFullYear()} Nauman Anees Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <StudioLink to="/privacy-policy" className="hover:text-[#F5EFE6] transition-colors">
              Privacy Policy
            </StudioLink>
            <StudioLink to="/book" className="hover:text-[#F5EFE6] transition-colors">
              Book a Project
            </StudioLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
