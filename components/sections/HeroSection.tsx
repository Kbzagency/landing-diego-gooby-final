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

        // GRACIAS text fade in
        tl.to(".hero-gracias", {
          opacity: 0.9,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.1,
        });

        // Fade in top subtitle
        tl.to(".hero-top-subtitle", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });

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
        tl.to(".hero-subtitle", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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

      {/* GRACIAS between Diego's hands */}
      <div
        className="hero-gracias absolute left-1/2 -translate-x-1/2 z-[5] font-[family-name:var(--font-bebas)] uppercase text-center select-none pointer-events-none opacity-0"
        style={{
          top: "22%",
          fontSize: "clamp(4rem, 18vw, 14rem)",
          letterSpacing: "0.05em",
          color: "rgba(0,0,0,0.85)",
          textShadow: "none",
        }}
      >
        GRACIAS
      </div>

      {/* Top subtitle */}
      <div className="hero-top-subtitle absolute top-20 left-1/2 -translate-x-1/2 z-10 font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.25em] text-xs md:text-base uppercase text-center leading-relaxed opacity-0">
        Gracias por dejarnos
        <br />
        construir tu ecosistema
        <br />
        digital oficial
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-6" style={{ paddingTop: "50vh" }}>
        <h1
          className="hero-title font-[family-name:var(--font-bebas)] text-[clamp(5rem,22vw,14rem)] leading-none text-white"
          style={{
            textShadow:
              "0 0 120px rgba(212,175,55,0.25), 0 4px 30px rgba(0,0,0,0.8)",
          }}
        >
          D10S
        </h1>
        <p
          className="hero-subtitle font-[family-name:var(--font-bebas)] text-white text-[clamp(2rem,8vw,5rem)] mt-4 tracking-[0.1em] max-w-lg opacity-0 uppercase"
          style={{
            textShadow: "0 0 60px rgba(212,175,55,0.2), 0 4px 20px rgba(0,0,0,0.7)",
          }}
        >
          Por ser argentino
        </p>
        <p className="hero-subtitle font-[family-name:var(--font-bebas)] text-[var(--color-gold)] text-xl md:text-2xl mt-6 tracking-[0.15em] max-w-lg opacity-0">
          EL LEGADO DE DIEGO, AHORA SE VIVE EN CADA FAN
        </p>
        <p className="hero-subtitle font-[family-name:var(--font-barlow)] text-[var(--color-champagne)] text-sm md:text-base mt-3 tracking-wider max-w-sm opacity-0">
          Una nueva forma de conectar con Diego Maradona
        </p>
        <p
          className="hero-subtitle font-[family-name:var(--font-bebas)] text-white tracking-[0.3em] uppercase opacity-0"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 6rem)",
            marginTop: "30px",
            opacity: 0,
          }}
        >
          FOREVER
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
