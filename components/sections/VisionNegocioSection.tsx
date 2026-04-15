"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

const PILARES = [
  {
    titulo: "Marcas",
    desc: "Las marcas no interrumpen. Acompañan el legado con integraciones cuidadas y respeto por la historia.",
    icon: "🤝",
  },
  {
    titulo: "Protección del Legado",
    desc: "Plataforma oficial. Control del contenido y la imagen. Sin usos indebidos. Construcción a largo plazo.",
    icon: "🛡️",
  },
  {
    titulo: "Sustentabilidad",
    desc: "Monetización respetuosa. Ediciones limitadas. Valor sostenido en el tiempo.",
    icon: "♾️",
  },
];

export default function VisionNegocioSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".vision-header", {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
          },
        });
        gsap.from(".pilar-card", {
          opacity: 0,
          y: 80,
          stagger: 0.15,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".pilar-card",
            start: "top 80%",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="legado"
      ref={container}
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/images/amigos-bar.jpg"
          alt="Fanáticos conectados con la pulsera GOOBY"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="vision-header text-center mb-64">
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-4">
            Visión
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,8vw,6rem)] text-white leading-none">
            UN LEGADO SOSTENIBLE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILARES.map((pilar, i) => (
            <div
              key={i}
              className="pilar-card border border-[var(--color-gold)]/15 rounded-2xl p-6 md:p-8 bg-white/4 backdrop-blur-sm text-center"
            >
              <span className="text-4xl mb-4 block">{pilar.icon}</span>
              <h3 className="font-[family-name:var(--font-bebas)] text-xl md:text-2xl text-[var(--color-gold)] mb-3 tracking-wider">
                {pilar.titulo}
              </h3>
              <p className="font-[family-name:var(--font-barlow)] text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {pilar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
