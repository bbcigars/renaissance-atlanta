'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ArtistImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-amber-600/30 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? "/images/artists/OctoberLondon2.jpg" : "/images/artists/OctoberLondon1.png"}
        alt="October London"
        fill
        className="object-cover transition-opacity duration-500"
      />
    </div>
  );
}
