"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

const FEATURES = [
  { icon: "📸", titulo: "Foto con Diego", desc: "Sacate una foto con Diego en tu espacio. Él aparece en tu living.", bgImage: null },
  { icon: "❓", titulo: "Trivias Históricas", desc: "Desafíos y conocimiento profundo del universo Maradona.", bgImage: null },
  { icon: "🏅", titulo: "Momentos Icónicos", desc: "Reviví el gol a los ingleses en primera persona.", bgImage: null },
  { icon: "💌", titulo: "Mensajes Personalizados", desc: "Diego te habla a vos. Un mensaje único e irrepetible.", bgImage: null },
  { icon: "🏆", titulo: "Premios Exclusivos", desc: "Ediciones limitadas y coleccionables únicos.", bgImage: null },
  { icon: "💬", titulo: "Chateá con el Diego", desc: "La magia de hablar con una leyenda.", bgImage: null },
];

export default function GoobyUniverseSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".universe-hero-content", {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".universe-hero", start: "top 60%" },
        });
        gsap.from(".feature-card", {
          opacity: 0,
          y: 60,
          stagger: 0.08,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: { trigger: ".feature-card", start: "top 85%" },
        });
        gsap.from(".fisico-digital-content", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".fisico-digital", start: "top 65%" },
        });
        gsap.from(".sentimiento-word", {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: { trigger: ".sentimiento-words", start: "top 70%" },
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      {/* 5A — Hero de sección */}
      <section
        id="universo"
        className="universe-hero relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-end pb-12"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/cara-digital.jpg"
            alt="Diego Maradona - mitad real, mitad digital"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>
        <div className="universe-hero-content relative z-10 w-full text-center px-6">
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-3">
            La Respuesta
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,10vw,8rem)] text-white leading-none">
            UNIVERSO GOOBY
          </h2>
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-champagne)] text-sm md:text-base mt-6 max-w-lg mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
            GOOBY hace posible el ecosistema digital oficial de Diego: inmersivo, interactivo y participativo.
          </p>
        </div>
      </section>

      {/* 5B — Feature Cards */}
      <section className="w-full py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-5xl mx-auto">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="feature-card relative rounded-2xl overflow-hidden border border-white/8 bg-white/4 hover:border-[var(--color-gold)]/40 transition-colors duration-300 p-6 min-h-[160px] text-center flex items-center justify-center"
            >
              {f.bgImage && (
                <div className="absolute inset-0">
                  <Image
                    src={f.bgImage}
                    alt=""
                    fill
                    className="object-cover opacity-15"
                  />
                  <div className="absolute inset-0 bg-black/65" />
                </div>
              )}
              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-[family-name:var(--font-bebas)] text-xl text-white mb-2">
                  {f.titulo}
                </h3>
                <p className="font-[family-name:var(--font-barlow)] text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing between sub-sections */}
      <div className="flex items-center justify-center py-12 md:py-20">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--color-gold-dim)]/20 to-transparent" />
      </div>

      {/* 5C — Universo Físico + Digital */}
      <section className="fisico-digital w-full overflow-hidden">
        {/* Parte superior: foto + título */}
        <div className="relative w-full py-32 md:py-44 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/pulsera-caja.jpg"
              alt="Pulsera D10S edición limitada"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
          </div>
          <div className="fisico-digital-content relative z-10 max-w-2xl mx-auto px-6 text-center">
            <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-10">
              Universo Físico + Digital
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,8vw,6rem)] text-white leading-tight">
              LA EXPERIENCIA
              <br />
              TAMBIÉN VIVE
              <br />
              <br />
              FUERA DE LA
              <br />
              PANTALLA
            </h2>
          </div>
        </div>

        {/* Foto de portada: productos físicos Maradona */}
        <div className="w-full max-w-5xl mx-auto px-6 mt-12 md:mt-16">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-[var(--color-gold)]/15 shadow-2xl">
            <Image
              src="/assets/images/maradona-merch.jpg"
              alt="Productos oficiales Maradona: botella, remera, bolso, gorra, pulsera, llavero — todos con certificado digital"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          </div>
        </div>

        {/* Parte inferior: texto + pasos sobre fondo limpio */}
        <div className="max-w-2xl mx-auto px-6 text-center pt-12 pb-8 md:pt-20 md:pb-12">
          <p className="font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-lg italic leading-loose" style={{ marginTop: "100px", marginBottom: "100px" }}>
            Productos físicos oficiales como pulseras o camisetas de edición
            limitada. Al acercar el celular, el fan accede automáticamente al
            universo Maradona con un{" "}
            <span className="text-[var(--color-gold)] not-italic font-semibold">
              certificado digital auténtico e irrepetible.
            </span>
          </p>

          {/* Foto 3 pasos: pulsera, celular, diego aparece */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-[var(--color-gold)]/15 shadow-2xl">
              <Image
                src="/assets/images/3-pasos-experiencia.jpg"
                alt="3 pasos: comprás la pulsera, acercás el celular, Diego aparece"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="flex items-center justify-center py-6 md:py-8">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-[var(--color-gold-dim)]/20 to-transparent" />
      </div>

      {/* 5D — El Sentimiento No Terminó */}
      <section className="w-full px-6" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-14">
            El Sentimiento No Terminó
          </p>

          <p className="font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-xl md:text-2xl italic leading-relaxed" style={{ marginBottom: "80px" }}>
            No se trata de contenido.
            <br />
            Se trata de volver a sentir:
          </p>

          {/* Three big words */}
          <div className="sentimiento-words space-y-6" style={{ marginBottom: "100px" }}>
            {[
              { text: "La magia.", color: "#D4AF37" },
              { text: "La conexión.", color: "#75AADB" },
              { text: "La pasión.", color: "#FFFFFF" },
            ].map((item, i) => (
              <p
                key={i}
                className="sentimiento-word font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,10vw,7rem)] leading-none"
                style={{ color: item.color }}
              >
                {item.text}
              </p>
            ))}
          </div>

          {/* Cinematic paragraph */}
          <div className="border-l-2 border-[var(--color-gold)] pl-8 text-left max-w-lg mx-auto space-y-20">
            <p className="font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-base md:text-lg italic leading-loose">
              Imaginá esto...
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-base md:text-lg italic leading-loose">
              Un fan abre su celular y...
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-base md:text-lg italic leading-loose">
              De repente Diego atraviesa la pantalla y aparece en su casa. Está
              en su living, para poder sacarse una foto. Y lo comparte.
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-base md:text-lg italic leading-loose">
              Ahora imaginá esto multiplicado por millones de personas en todo
              el mundo, al mismo tiempo.
            </p>
            <p className="font-[family-name:var(--font-bebas)] text-[var(--color-gold)] text-lg md:text-xl tracking-wider pt-4">
              Eso no es contenido. Es vínculo. Es cercanía. Es emoción real.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
