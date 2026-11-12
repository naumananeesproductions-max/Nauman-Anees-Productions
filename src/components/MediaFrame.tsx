import React, { useState } from 'react';
import { Film } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  priority = false,
  fallbackTitle,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#191316] via-[#110C0E] to-[#080607] border border-[#C9A25D]/20 text-center p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Film className="w-8 h-8 text-[#C9A25D]/60 mb-2" aria-hidden="true" />
        <p className="font-display text-lg text-[#F5EFE6]/80">
          {fallbackTitle || 'Nauman Anees Productions'}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#120E10] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setFailed(true)}
        className={imgClassName}
      />
    </div>
  );
};
