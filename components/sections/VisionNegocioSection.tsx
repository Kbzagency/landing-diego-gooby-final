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
  {
    titulo: "Seguridad",
    desc: "Cada producto tiene un código único que aporta trazabilidad y experiencia. El estándar de autenticación más alto del mercado.",
    icon: "🔐",
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
      className="relative w-full pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden"
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
        <div className="vision-header text-center" style={{ marginBottom: "100px" }}>
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-4">
            Visión
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(1.6rem,6vw,5rem)] text-white leading-tight whitespace-nowrap">
            UN LEGADO UN SENTIMIENTO
          </h2>
          <p className="font-[family-name:var(--font-bebas)] text-[var(--color-celeste)] text-xl md:text-3xl tracking-[0.12em] mt-10 max-w-3xl mx-auto leading-tight">
            MILLONES DE HINCHAS
            <br />
            EN TODO EL MUNDO
          </p>
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-champagne)] text-sm md:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            Son usuarios verificados de una experiencia auténtica
          </p>
          <p className="font-[family-name:var(--font-bebas)] text-[var(--color-gold)] text-2xl md:text-4xl tracking-[0.2em] mt-4">
            GRACIAS D10S
          </p>
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.3em] text-xs md:text-sm uppercase mt-3">
            Marca oficial de los herederos Maradona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        {/* Monetización */}
        <div className="mt-6 border border-[var(--color-gold)]/15 rounded-2xl p-6 md:p-8 bg-white/4 backdrop-blur-sm text-center">
          <span className="text-4xl mb-4 block">💰</span>
          <h3 className="font-[family-name:var(--font-bebas)] text-xl md:text-2xl text-[var(--color-gold)] mb-4 tracking-wider">
            Monetización
          </h3>
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Compras dentro de la app. Sponsorships. Ediciones limitadas de productos físicos.
          </p>
        </div>
      </div>
    </section>
  );
}
