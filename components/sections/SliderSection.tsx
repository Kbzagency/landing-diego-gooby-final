"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/assets/images/hero-estadio.jpg",
    alt: "Diego Maradona en el estadio",
  },
  {
    src: "/assets/images/diego-sonriendo.jpg",
    alt: "Diego Maradona sonriendo",
  },
  {
    src: "/assets/images/pulsera-verificado.jpg",
    alt: "Pulsera GOOBY verificando",
  },
  {
    src: "/assets/images/abuelo-nieto.jpg",
    alt: "Abuelo y nieto con el legado de Diego",
  },
  {
    src: "/assets/images/amigos-bar.jpg",
    alt: "Amigos viviendo la experiencia GOOBY",
  },
];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-advance every 4s
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="w-full overflow-hidden relative" style={{ height: "60vw", maxHeight: "640px", minHeight: "280px" }}>
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i === current ? "var(--color-gold)" : "rgba(255,255,255,0.3)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
