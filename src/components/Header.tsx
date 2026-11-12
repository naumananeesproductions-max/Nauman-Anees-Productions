import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { STUDIO_ASSETS } from '../data/studioData';
import { useRouter } from '../context/RouterContext';
import { StudioLink } from './StudioLink';

const SERVICE_DROPDOWN_LINKS = [
  { label: 'All Services Overview', to: '/services' },
  { label: 'Music Production', to: '/services/music-production' },
  { label: 'Video Production (Music Videos)', to: '/services/video-production' },
  { label: 'Video Post-Production & VFX', to: '/services/video-post-production' },
  { label: 'TV Commercials & Advertising', to: '/services/tv-commercials' },
  { label: 'TV Dramas', to: '/services/tv-dramas' },
  { label: 'Films & Short Films', to: '/services/films' },
];

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const linkClass = (active: boolean) =>
    `text-xs xl:text-[13px] tracking-wide whitespace-nowrap shrink-0 transition-colors py-1 border-b ${
      active
        ? 'text-[#DFBE7E] border-[#C9A25D]'
        : 'text-[#F5EFE6]/85 border-transparent hover:text-[#DFBE7E] hover:border-[#C9A25D]/40'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#080607]/92 backdrop-blur-md border-b border-[#C9A25D]/15">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-4 xl:gap-6">
        {/* Zone 1: Brand Mark (Official Logo + Single-Line Wordmark) */}
        <StudioLink
          to="/"
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-[#C9A25D] rounded-sm"
          aria-label="Nauman Anees Productions Home"
        >
          <img
            src={STUDIO_ASSETS.logo}
            alt="Nauman Anees Productions Official Logo"
            className="w-10 h-10 rounded-full object-cover border border-[#C9A25D]/40 shrink-0"
          />
          <span className="font-display text-lg sm:text-xl font-semibold tracking-wide text-[#F5EFE6] group-hover:text-[#DFBE7E] transition-colors whitespace-nowrap shrink-0">
            Nauman Anees Productions
          </span>
        </StudioLink>

        {/* Zone 2: Desktop Navigation */}
        <nav aria-label="Primary Navigation" className="hidden xl:flex items-center gap-4 2xl:gap-5">
          <StudioLink to="/" className={linkClass(pathname === '/')}>
            Home
          </StudioLink>
          <StudioLink to="/about" className={linkClass(pathname === '/about')}>
            About Us
          </StudioLink>
          <StudioLink to="/legacy" className={linkClass(pathname.startsWith('/legacy'))}>
            Legacy
          </StudioLink>

          {/* Services Dropdown */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1 text-xs xl:text-[13px] tracking-wide whitespace-nowrap shrink-0 transition-colors py-1 border-b cursor-pointer ${
                pathname.startsWith('/services')
                  ? 'text-[#DFBE7E] border-[#C9A25D]'
                  : 'text-[#F5EFE6]/85 border-transparent hover:text-[#DFBE7E]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-72 bg-[#120E10] border border-[#C9A25D]/25 rounded-md shadow-2xl py-2 z-50"
              >
                {SERVICE_DROPDOWN_LINKS.map((item) => (
                  <StudioLink
                    key={item.to}
                    to={item.to}
                    role="menuitem"
                    className={`block px-4 py-2.5 text-xs tracking-wide transition-colors ${
                      pathname === item.to
                        ? 'text-[#DFBE7E] bg-[#6B0F1A]/35'
                        : 'text-[#F5EFE6]/85 hover:text-[#DFBE7E] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </StudioLink>
                ))}
              </div>
            )}
          </div>

          <StudioLink to="/portfolio" className={linkClass(pathname === '/portfolio')}>
            Portfolio
          </StudioLink>

          <StudioLink
            to="/talent"
            className={`px-3 py-1.5 text-[11px] xl:text-xs font-semibold tracking-[0.08em] uppercase whitespace-nowrap shrink-0 rounded border transition-all ${
              pathname === '/talent'
                ? 'bg-[#6B0F1A] text-[#F5EFE6] border-[#C9A25D]'
                : 'bg-[#6B0F1A]/45 text-[#DFBE7E] border-[#C9A25D]/50 hover:bg-[#6B0F1A] hover:text-[#F5EFE6] hover:border-[#C9A25D]'
            }`}
          >
            JOIN OUR TALENT NETWORK
          </StudioLink>

          <StudioLink to="/events" className={linkClass(pathname === '/events')}>
            Events
          </StudioLink>
          <StudioLink to="/contact" className={linkClass(pathname === '/contact')}>
            Contact
          </StudioLink>
        </nav>

        {/* Zone 3: Primary CTA & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <StudioLink
            to="/book"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] hover:from-[#DFBE7E] hover:to-[#E8CFA0] rounded transition-all whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(201,162,93,0.18)]"
          >
            BOOK A PROJECT
          </StudioLink>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded border border-[#C9A25D]/30 text-[#F5EFE6] hover:border-[#C9A25D] hover:text-[#DFBE7E] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0E0A0C] border-t border-[#C9A25D]/20 max-h-[82vh] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="px-4 py-5 space-y-1">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Legacy', to: '/legacy' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'Events & Artist Booking', to: '/events' },
              { label: 'Contact', to: '/contact' },
            ].map((item) => (
              <StudioLink
                key={item.to}
                to={item.to}
                className={`block px-3 py-3 rounded text-sm font-medium ${
                  pathname === item.to
                    ? 'text-[#DFBE7E] bg-[#6B0F1A]/30'
                    : 'text-[#F5EFE6]/90 hover:bg-white/5'
                }`}
              >
                {item.label}
              </StudioLink>
            ))}

            <div className="pt-2 pb-1 px-3 text-xs uppercase tracking-widest text-[#C9A25D]">
              Services
            </div>
            <div className="pl-3 space-y-1 border-l border-[#C9A25D]/20 ml-3">
              {SERVICE_DROPDOWN_LINKS.map((item) => (
                <StudioLink
                  key={item.to}
                  to={item.to}
                  className={`block px-3 py-2.5 rounded text-sm ${
                    pathname === item.to
                      ? 'text-[#DFBE7E] bg-[#6B0F1A]/25'
                      : 'text-[#B8AEA0] hover:text-[#F5EFE6]'
                  }`}
                >
                  {item.label}
                </StudioLink>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <StudioLink
                to="/talent"
                className="flex items-center justify-center w-full py-3 px-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#DFBE7E] bg-[#6B0F1A]/60 border border-[#C9A25D]/60 rounded"
              >
                JOIN OUR TALENT NETWORK
              </StudioLink>
              <StudioLink
                to="/book"
                className="flex items-center justify-center w-full py-3 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] rounded"
              >
                BOOK A PROJECT
              </StudioLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
