import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { StudioLink } from './StudioLink';

interface CinematicConfirmationProps {
  requestId: string;
  selectedService?: string;
  onReset?: () => void;
}

export const CinematicConfirmation: React.FC<CinematicConfirmationProps> = ({
  requestId,
  selectedService,
  onReset,
}) => {
  return (
    <motion.div
      data-testid="cinematic-confirmation"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-lg border border-[#C9A25D]/40 bg-gradient-to-b from-[#161013] to-[#0B0809] p-8 sm:p-12 text-center shadow-2xl"
    >
      {/* Subtle film strip perforations top & bottom */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-2 opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0px, transparent 10px, #C9A25D 10px, #C9A25D 18px)',
        }}
      />

      {/* Camera Aperture / Shutter Iris Animation */}
      <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 100 100"
          className="w-24 h-24 text-[#C9A25D]"
          initial={{ rotate: -45, scale: 0.8, opacity: 0.4 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 4"
            strokeOpacity="0.6"
          />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="50"
              y1="14"
              x2="72"
              y2="34"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeOpacity="0.55"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </motion.svg>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A25D] to-[#9A7434] flex items-center justify-center shadow-[0_0_28px_rgba(201,162,93,0.45)]"
        >
          <Check className="w-6 h-6 text-[#080607] stroke-[2.75]" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="space-y-4 max-w-lg mx-auto"
      >
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-wide text-[#F5EFE6]">
          YOUR REQUEST HAS BEEN SUCCESSFULLY RECEIVED.
        </h3>
        <p className="text-sm sm:text-base text-[#B8AEA0]">
          Our team will review your submission and contact you shortly.
        </p>

        {selectedService && (
          <p className="text-xs uppercase tracking-[0.18em] text-[#C9A25D]">
            Recorded Selection: {selectedService}
          </p>
        )}

        <div className="inline-block px-5 py-3 rounded bg-black/50 border border-[#C9A25D]/30">
          <span className="block text-[11px] uppercase tracking-widest text-[#B8AEA0]">
            Unique Request ID
          </span>
          <span className="font-mono tabular-nums text-base font-medium text-[#DFBE7E] mt-0.5 block">
            {requestId}
          </span>
        </div>

        <p className="text-xs text-[#B8AEA0]/85 leading-relaxed">
          Please note: preferred appointment or shoot dates are reviewed manually by our production
          coordinators and confirmed directly with you.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5EFE6] border border-white/20 rounded hover:border-[#C9A25D] transition-colors cursor-pointer"
            >
              Submit Another Request
            </button>
          )}
          <StudioLink
            to="/"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080607] bg-gradient-to-r from-[#C9A25D] to-[#DFBE7E] rounded hover:opacity-95 transition-opacity"
          >
            Return Home
          </StudioLink>
        </div>
      </motion.div>
    </motion.div>
  );
};
