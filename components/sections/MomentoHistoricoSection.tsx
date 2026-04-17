"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsapConfig";

export default function MomentoHistoricoSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".momento-title", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        });
        const split = SplitText.create(".momento-narrative", {
          type: "words",
        });
        gsap.from(split.words, {
          opacity: 0,
          y: 20,
          stagger: 0.02,
          scrollTrigger: {
            trigger: ".momento-narrative",
            start: "top 80%",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Watermark "40" */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-[family-name:var(--font-bebas)] leading-none"
          style={{
            fontSize: "70vw",
            color: "transparent",
            WebkitTextStroke: "1px rgba(212,175,55,0.05)",
          }}
        >
          40
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden flex-shrink-0 ring-1 ring-[var(--color-gold)]/10">
          <Image
            src="/assets/images/diego-sonriendo.jpg"
            alt="Diego Maradona sonriendo con la camiseta argentina"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-16">
            El Camino
          </p>
          <h2 className="momento-title font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-tight mb-8">
            HASTA HOY,
            <br />
            EL LEGADO SE RECUERDA.
          </h2>
          <p className="momento-narrative font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-xl md:text-2xl leading-relaxed italic">
            Ahora puede vivirse.
          </p>
        </div>
      </div>
    </section>
  );
}
