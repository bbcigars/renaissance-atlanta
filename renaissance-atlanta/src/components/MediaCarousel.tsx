"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const media = [
  {
    type: "video",
    src: "/images/marketing/ChefYork.mp4",
    alt: "Chef York preparing dishes",
  },
  {
    type: "image",
    src: "/images/marketing/drink1.jpg",
    alt: "Craft cocktails",
  },
  {
    type: "video",
    src: "/images/marketing/TurkeyDay.mp4",
    alt: "Happy Holidays",
  },
  {
    type: "image",
    src: "/images/marketing/SurfAndTurf.png",
    alt: "Surf and Turf",
  },
];

export default function MediaCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const item = media[current];

  return (
    <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-amber-600/30">
      {item.type === "image" ? (
        <Image src={item.src} alt={item.alt} fill className="object-cover" />
      ) : (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {media.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-amber-400 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
