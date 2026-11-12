import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mic, Film, Sparkles, Music, Users, PenTool, Clapperboard, Camera } from 'lucide-react';
import {
  EXPERIENCE_COUNTERS,
  LEGACY_PROFILES,
  PORTFOLIO_DISCIPLINES,
  SERVICE_DIRECTORY,
  STUDIO_ASSETS,
  TALENT_DISCOVERY_CARDS,
} from '../data/studioData';
import { StudioLink } from '../components/StudioLink';
import { MediaFrame } from '../components/MediaFrame';

const TALENT_ICON_MAP: Record<string, React.ReactNode> = {
  singer: <Mic className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
  actor: <Clapperboard className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
  model: <Camera className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
  musician: <Music className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
  dancer: <Sparkles className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
  writer: <PenTool className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
  director: <Film className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
  creator: <Users className="w-5 h-5 text-[#C9A25D]" aria-hidden="true" />,
};

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden border-b border-[#C9A25D]/15 bg-[#080607]">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={STUDIO_ASSETS.heroCinemaStudio}
            alt="Luxury dark film production soundstage with ARRI cinema camera rig"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080607] via-[#080607]/82 to-[#080607]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080607] via-transparent to-[#080607]/50" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#C9A25D] mb-4">
              Nauman Anees Productions · Your One-Stop Media Solution
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-semibold text-[#F5EFE6] leading-[1.04] [text-wrap:balance]">
              A LEGACY OF CINEMA. A VISION FOR THE FUTURE.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#F5EFE6]/85 leading-relaxed max-w-2xl">
              From generations of filmmaking heritage to the future of visual storytelling, Nauman
              Anees Productions brings creativity, technology and production expertise together under
              one roof.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <StudioLink
                to="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] hover:from-[#DFBE7E] hover:to-[#E8CFA0] rounded transition-all shadow-[0_0_30px_rgba(201,162,93,0.25)]"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </StudioLink>

              <StudioLink
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5EFE6] border border-[#C9A25D]/45 hover:border-[#C9A25D] hover:bg-[#6B0F1A]/30 rounded transition-colors"
              >
                Explore Our Services
              </StudioLink>

              <StudioLink
                to="/legacy"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E] hover:text-[#F5EFE6] transition-colors"
              >
                Explore Our Legacy
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </StudioLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EXPERIENCE COUNTERS STRIP */}
      <section className="bg-[#0D090B] border-b border-[#C9A25D]/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERIENCE_COUNTERS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-4xl sm:text-5xl font-semibold text-[#DFBE7E] tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.14em] text-[#B8AEA0]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#B8AEA0]/80">
            Figures reflect cumulative family-affiliated historical industry involvement across three
            generations of filmmaking in Pakistan.
          </p>
        </div>
      </section>

      {/* 3. ABOUT US & THREE GENERATIONS */}
      <section className="py-20 sm:py-28 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C9A25D] mb-3">
              About Us · Three Generations
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F5EFE6] [text-wrap:balance]">
              MORE THAN SIX DECADES. ONE CREATIVE LEGACY.
            </h2>
            <p className="mt-4 text-base text-[#B8AEA0] leading-relaxed">
              Nauman Anees Productions stands on a rare multi-generational foundation—combining
              over 60 years of family involvement in Pakistani cinema, television, direction,
              editing, visual effects, animation, and music production.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {LEGACY_PROFILES.map((person) => (
              <article
                key={person.slug}
                className="group flex flex-col bg-[#120E10] border border-white/10 hover:border-[#C9A25D]/45 rounded-lg overflow-hidden transition-colors"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#080607]">
                  <MediaFrame
                    src={person.portrait}
                    alt={person.portraitAlt}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#C9A25D]">
                      {person.titleBadge} · {person.relationship}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mt-2">
                      {person.headline}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-[#DFBE7E]/90">{person.role}</p>
                    <p className="mt-3 text-sm text-[#B8AEA0] leading-relaxed">
                      {person.positioningStatement}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <StudioLink
                      to={person.route}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E] hover:text-[#F5EFE6] transition-colors"
                    >
                      Read Biography Profile
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </StudioLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES */}
      <section className="py-20 sm:py-28 bg-[#0D090B] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.26em] text-[#C9A25D] mb-3">
                Integrated Production Capabilities
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F5EFE6] [text-wrap:balance]">
                OUR SERVICES
              </h2>
              <p className="mt-4 text-base text-[#B8AEA0] leading-relaxed">
                Every stage of audio, film, television, visual effects, animation, and live artist
                management executed with cohesive creative direction.
              </p>
            </div>
            <StudioLink
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E] hover:text-[#F5EFE6] shrink-0"
            >
              View All Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </StudioLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_DIRECTORY.map((srv, index) => (
              <StudioLink
                key={srv.route}
                to={srv.route}
                className={`group relative rounded-lg overflow-hidden border border-white/10 hover:border-[#C9A25D]/45 bg-[#120E10] flex flex-col transition-all ${
                  index === SERVICE_DIRECTORY.length - 1 ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''
                }`}
              >
                <div
                  className={
                    index === SERVICE_DIRECTORY.length - 1
                      ? 'lg:w-1/2 aspect-[16/9] lg:aspect-auto'
                      : 'aspect-[16/10]'
                  }
                >
                  <MediaFrame
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#C9A25D]">
                      {String(index + 1).padStart(2, '0')}. {srv.category}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] mt-2 group-hover:text-[#DFBE7E] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#B8AEA0] leading-relaxed">{srv.summary}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E]">
                    Explore &amp; Book
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </StudioLink>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEW TALENT DISCOVERY & APPLICATION HOMEPAGE SECTION */}
      <section
        id="talent-discovery"
        className="relative py-20 sm:py-28 bg-[#080607] border-b border-[#C9A25D]/20 overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={STUDIO_ASSETS.talentStageSpotlight}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080607] via-[#080607]/85 to-[#080607]" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C9A25D] mb-3">
              Join Our Talent Network
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F5EFE6] [text-wrap:balance]">
              YOUR JOURNEY TO THE ENTERTAINMENT INDUSTRY STARTS HERE.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#F5EFE6]/85 leading-relaxed">
              Are you dreaming of becoming a singer, actor, model or entertainer? Nauman Anees
              Productions welcomes emerging talent and creative individuals who want to take their
              first step towards the entertainment industry.
            </p>
            <p className="mt-3 text-sm text-[#DFBE7E]">
              New to the industry? No professional experience is required to submit your application.
            </p>

            <div className="mt-7">
              <StudioLink
                to="/talent"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] hover:from-[#DFBE7E] hover:to-[#E8CFA0] rounded transition-all shadow-[0_0_28px_rgba(201,162,93,0.22)]"
              >
                APPLY NOW — START YOUR JOURNEY
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </StudioLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TALENT_DISCOVERY_CARDS.map((card) => (
              <StudioLink
                key={card.id}
                to={`/talent?category=${encodeURIComponent(card.categoryValue)}`}
                className="group p-6 rounded-lg bg-[#120E10]/90 border border-white/12 hover:border-[#C9A25D]/60 hover:bg-[#191316] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#6B0F1A]/40 border border-[#C9A25D]/30 flex items-center justify-center mb-4">
                    {TALENT_ICON_MAP[card.id]}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#F5EFE6] group-hover:text-[#DFBE7E] transition-colors">
                    {card.cardTitle}
                  </h3>
                  <p className="mt-2 text-sm text-[#B8AEA0] leading-relaxed">{card.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A25D]">
                  Apply as {card.categoryValue}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </StudioLink>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR VISION */}
      <section className="py-20 sm:py-24 bg-[#0D090B] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C9A25D] mb-3">
              Studio Vision
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F5EFE6] [text-wrap:balance]">
              BUILDING THE NEXT ERA OF PAKISTANI CINEMA.
            </h2>
            <p className="mt-5 text-base text-[#B8AEA0] leading-relaxed">
              Under the creative direction of Daniyal Nauman, Nauman Anees Productions is designed
              as an integrated film, music, post-production, VFX, animation, and entertainment studio
              built to stand alongside prestigious international production houses.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <StudioLink
                to="/legacy/daniyal-nauman"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E] border border-[#C9A25D]/40 rounded hover:border-[#C9A25D] transition-colors"
              >
                Explore Daniyal Nauman&apos;s Vision
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </StudioLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <MediaFrame
              src={STUDIO_ASSETS.filmDramaProduction}
              alt="Film production crew and director monitoring cinema frame on set"
              className="rounded-lg aspect-[4/3] border border-[#C9A25D]/20"
            />
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO / CRAFT SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#080607] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-[#C9A25D] mb-3">
                Portfolio &amp; Studio Craft
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F5EFE6]">
                CINEMATIC DISCIPLINES UNDER ONE ROOF
              </h2>
            </div>
            <StudioLink
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E] hover:text-[#F5EFE6]"
            >
              View Studio Showcase
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </StudioLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DISCIPLINES.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden bg-[#120E10] border border-white/10 flex flex-col"
              >
                <MediaFrame
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/9]"
                />
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#C9A25D]">
                      {item.category}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-[#F5EFE6] mt-1.5">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#B8AEA0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5">
                    <StudioLink
                      to={item.route}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFBE7E] hover:text-[#F5EFE6]"
                    >
                      {item.ctaLabel}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </StudioLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#15080B] to-[#080607] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.26em] text-[#C9A25D] mb-4">
            Start Your Production
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#F5EFE6] [text-wrap:balance]">
            Have a Vision? Let&apos;s Bring It to Life.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#B8AEA0]">
            Whether you are commissioning a film, recording a song, post-producing a drama, booking
            a concert artist, or launching your creative career—our studio team is ready to review
            your project.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <StudioLink
              to="/book"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] rounded hover:opacity-95 transition-opacity"
            >
              Book a Project
            </StudioLink>
            <StudioLink
              to="/contact"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5EFE6] border border-[#C9A25D]/40 rounded hover:border-[#C9A25D] transition-colors"
            >
              Contact Studio
            </StudioLink>
          </div>
        </div>
      </section>
    </div>
  );
};
