import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDIO_ASSETS } from '../data/studioData';
import { useRouter } from '../context/RouterContext';

export const CinemaCurtains: React.FC = () => {
  const { introDone, completeIntro, transitionPhase } = useRouter();
  const [openingStage, setOpeningStage] = useState<'closed' | 'parting' | 'revealed'>('closed');

  useEffect(() => {
    if (introDone) return;

    const partTimer = window.setTimeout(() => {
      setOpeningStage('parting');
    }, 320);

    const revealTimer = window.setTimeout(() => {
      setOpeningStage('revealed');
    }, 1750);

    const doneTimer = window.setTimeout(() => {
      completeIntro();
    }, 2450);

    return () => {
      window.clearTimeout(partTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(doneTimer);
    };
  }, [introDone, completeIntro]);

  const isTransitionActive = transitionPhase !== 'idle';

  return (
    <>
      {/* Opening Cinema Theatre Sequence */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            key="opening-curtain"
            data-testid="opening-cinema-curtains"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
            className="fixed inset-0 z-[100] overflow-hidden bg-[#060405] flex items-center justify-center"
            style={{ perspective: '1400px' }}
          >
            {/* Ambient Stage Backlight revealed behind parting curtains */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0.12, scale: 0.85 }}
              animate={{
                opacity: openingStage === 'closed' ? 0.15 : 0.85,
                scale: openingStage === 'closed' ? 0.85 : 1.08,
              }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 48%, rgba(201, 162, 93, 0.24) 0%, rgba(107, 15, 26, 0.28) 38%, rgba(8, 6, 7, 0.96) 76%)',
              }}
            />

            {/* Official Logo & Tagline Reveal behind curtains */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{
                opacity: openingStage === 'closed' ? 0 : 1,
                scale: openingStage === 'closed' ? 0.94 : 1,
                y: openingStage === 'closed' ? 12 : 0,
              }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#C9A25D]/40 shadow-[0_0_50px_rgba(201,162,93,0.25)] mb-6 bg-black">
                <img
                  src={STUDIO_ASSETS.logo}
                  alt="Nauman Anees Productions Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-display text-2xl sm:text-4xl tracking-wide text-[#F5EFE6] font-semibold">
                NAUMAN ANEES PRODUCTIONS
              </p>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.28em] text-[#C9A25D]">
                Your One-Stop Media Solution.
              </p>
            </motion.div>

            {/* Top Theatre Valance Drapery */}
            <div
              aria-hidden="true"
              className="cinema-valance absolute top-0 inset-x-0 h-10 sm:h-14 z-30 border-b border-[#C9A25D]/20"
            />

            {/* Left Velvet Curtain Panel */}
            <motion.div
              aria-hidden="true"
              initial={{ x: '0%', rotateY: 0, scaleX: 1 }}
              animate={
                openingStage === 'closed'
                  ? { x: '0%', rotateY: 0, scaleX: 1 }
                  : { x: '-96%', rotateY: 14, scaleX: 0.88 }
              }
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="velvet-curtain-left absolute top-0 bottom-0 left-0 w-[51.5%] z-20"
            >
              <div className="velvet-sheen absolute inset-0" />
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-black/60 to-transparent" />
            </motion.div>

            {/* Right Velvet Curtain Panel */}
            <motion.div
              aria-hidden="true"
              initial={{ x: '0%', rotateY: 0, scaleX: 1 }}
              animate={
                openingStage === 'closed'
                  ? { x: '0%', rotateY: 0, scaleX: 1 }
                  : { x: '96%', rotateY: -14, scaleX: 0.88 }
              }
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'right center' }}
              className="velvet-curtain-right absolute top-0 bottom-0 right-0 w-[51.5%] z-20"
            >
              <div className="velvet-sheen absolute inset-0" />
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 to-transparent" />
            </motion.div>

            {/* Accessible Skip Intro Control */}
            <button
              type="button"
              onClick={completeIntro}
              className="fixed bottom-6 right-6 z-40 px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#F5EFE6]/85 bg-black/70 border border-[#C9A25D]/35 rounded-md hover:border-[#C9A25D] hover:text-[#DFBE7E] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A25D]"
            >
              Enter Studio
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Internal Route Transition Curtains */}
      <AnimatePresence>
        {isTransitionActive && (
          <motion.div
            key="route-curtain"
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            className="fixed inset-0 z-[95] pointer-events-none overflow-hidden"
            style={{ perspective: '1200px' }}
          >
            <div className="cinema-valance absolute top-0 inset-x-0 h-6 z-30" />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: transitionPhase === 'closing' ? '0%' : '-102%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="velvet-curtain-left absolute top-0 bottom-0 left-0 w-[51%] z-20"
            >
              <div className="velvet-sheen absolute inset-0" />
            </motion.div>

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: transitionPhase === 'closing' ? '0%' : '102%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="velvet-curtain-right absolute top-0 bottom-0 right-0 w-[51%] z-20"
            >
              <div className="velvet-sheen absolute inset-0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
