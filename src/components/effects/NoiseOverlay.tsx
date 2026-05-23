import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <svg 
      className="pointer-events-none fixed inset-0 z-[99] h-full w-full opacity-[0.015] hidden md:block" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noiseFilter">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.65" 
          numOctaves="3" 
          stitchTiles="stitch" 
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};
