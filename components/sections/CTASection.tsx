"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsapConfig";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".cta-heading", {
          type: "chars",
          mask: "chars",
        });
        gsap.from(split.chars, {
          opacity: 0,
          y: 60,
          stagger: 0.02,
          duration: 0.7,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".cta-heading",
            start: "top 70%",
          },
        });
        gsap.from(".cta-body", {
          opacity: 0,
          y: 30,
          duration: 1,
          scrollTrigger: {
            trigger: ".cta-body",
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
      className="relative flex flex-col items-center px-6 text-center overflow-hidden py-16 md:py-24"
    >
      {/* Watermark "10" — bottom-right corner, very subtle */}
      <div
        className="absolute bottom-0 right-0 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none"
        style={{
          fontSize: "55vw",
          color: "transparent",
          WebkitTextStroke: "1px rgba(212,175,55,0.04)",
          transform: "translateX(18%) translateY(18%)",
        }}
        aria-hidden="true"
      >
        10
      </div>

      <div className="relative z-10 max-w-2xl">
        <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.5em] text-xs uppercase mb-8">
          Diego es Universal
        </p>
        <h2 className="cta-heading font-[family-name:var(--font-bebas)] text-[clamp(1.6rem,6vw,5rem)] text-white leading-tight mb-8">
          ¿TE IMAGINÁS A MILLONES
          <br />
          DE PERSONAS DE TODO EL MUNDO
          <br />
          CONECTADAS CON DIEGO A LA VEZ?
        </h2>
        <p className="cta-body font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-lg md:text-xl italic leading-relaxed max-w-xl mx-auto" style={{ marginBottom: "80px" }}>
          Lo que falta es construir el lugar donde esa eternidad cobre vida de
          forma correcta. Y ese lugar... lo podemos construir juntos.
        </p>

        <MagneticButton>
          <span className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em]">
            SER PARTE DEL LEGADO
          </span>
        </MagneticButton>

        <div className="mt-20">
          <p className="font-[family-name:var(--font-bebas)] text-[var(--color-gold-dim)] tracking-[0.8em] text-sm">
            GOOBY
          </p>
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-text-muted)] text-xs mt-2 tracking-widest">
            Ecosistema Digital Oficial de Diego Maradona
          </p>
        </div>
      </div>

      <div className="w-px h-16 bg-gradient-to-b from-[var(--color-gold-dim)] to-transparent mt-12" />
    </section>
  );
}
