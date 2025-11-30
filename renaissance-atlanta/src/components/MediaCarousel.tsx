"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const media = [
  {
    type: "video",
    src: "/images/marketing/ChefYork.mp4",
    alt: "Chef York preparing dishes",
  },
  {
    type: "image",
    src: "/images/marketing/drinksAnyone.svg",
    alt: "Craft cocktails",
  },
  {
    type: "image",
    src: "/images/marketing/drinksAnyone2.svg",
    alt: "Happy Holidays",
  },
  {
    type: "image",
    src: "/images/marketing/goodEating.svg",
    alt: "Surf and Turf",
  },
];

export default function MediaCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Force video play when slide changes
  useEffect(() => {
    const item = media[current];
    if (item.type === "video" && videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [current]);

  const item = media[current];

  return (
    <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-amber-600/30">
      {item.type === "image" ? (
        <Image src={item.src} alt={item.alt} fill className="object-cover" />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
