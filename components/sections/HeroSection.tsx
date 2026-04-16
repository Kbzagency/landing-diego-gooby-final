"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsapConfig";
import { motion } from "motion/react";

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();

        // Typewriter effect for top subtitle
        const subtitleEl = document.querySelector(".hero-top-subtitle") as HTMLElement;
        if (subtitleEl) {
          const textWidth = subtitleEl.scrollWidth;
          tl.to(subtitleEl, {
            width: textWidth + 2,
            duration: 1.8,
            ease: "steps(30)",
            delay: 0.2,
          });
          tl.to(subtitleEl, {
            borderColor: "transparent",
            duration: 0.1,
            delay: 0.3,
          });
        }

        // D10S title entrance
        const split = SplitText.create(".hero-title", {
          type: "chars",
          mask: "chars",
        });
        tl.from(split.chars, {
          opacity: 0,
          y: 80,
          rotationX: -60,
          stagger: 0.05,
          duration: 0.9,
          ease: "back.out(1.5)",
        }, "-=0.3");

        // Quote subtitle
        tl.from(".hero-subtitle", {
          opacity: 0,
          y: 20,
          duration: 0.8,
        }, "-=0.3");
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-estadio.jpg"
          alt="Diego Maradona con el número 10, brazos abiertos en el estadio"
          fill
          priority
          className="object-cover object-top"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      {/* Top subtitle - typewriter */}
      <p className="hero-top-subtitle absolute top-24 left-1/2 -translate-x-1/2 z-10 font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.35em] text-sm md:text-lg uppercase text-center whitespace-nowrap overflow-hidden border-r-2 border-[var(--color-gold)] w-0">
        El Ecosistema Digital Oficial de
      </p>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          className="hero-title font-[family-name:var(--font-bebas)] text-[clamp(5rem,22vw,14rem)] leading-none text-white"
          style={{
            textShadow:
              "0 0 120px rgba(212,175,55,0.25), 0 4px 30px rgba(0,0,0,0.8)",
          }}
        >
          D10S
        </h1>
        <p className="hero-subtitle font-[family-name:var(--font-bebas)] text-[var(--color-gold)] text-xl md:text-2xl mt-6 tracking-[0.15em] max-w-lg opacity-0">
          EL LEGADO DE DIEGO, AHORA SE VIVE EN CADA FAN
        </p>
        <p className="hero-subtitle font-[family-name:var(--font-barlow)] text-[var(--color-champagne)] text-sm md:text-base mt-3 tracking-wider max-w-sm opacity-0">
          Una nueva forma de conectar con Diego Maradona
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="font-[family-name:var(--font-barlow)] text-[10px] text-[var(--color-gold-dim)] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--color-gold-dim)] to-transparent" />
      </motion.div>
    </section>
  );
}
