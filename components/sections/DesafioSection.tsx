"use client";

import Image from "next/image";

export default function DesafioSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Foto arriba */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-12 ring-1 ring-[var(--color-gold)]/10">
          <Image
            src="/assets/images/abuelo-nieto.jpg"
            alt="Abuelo y nieto conectados por el legado de Diego Maradona"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 720px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        </div>

        {/* Texto debajo */}
        <div className="text-center">
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-10">
            El Desafío
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.4rem,4vw,3rem)] text-white leading-relaxed italic mb-10">
            &ldquo;¿Cómo unimos a quienes lo vieron en México 86 y a las nuevas
            generaciones para que puedan{" "}
            <span className="text-[var(--color-gold)]">
              ser parte de su historia
            </span>
            ?&rdquo;
          </h2>
          <div className="w-px h-16 bg-gradient-to-b from-[var(--color-gold-dim)] to-transparent mx-auto mb-10" />
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.4rem,4vw,3rem)] text-white leading-relaxed italic">
            &ldquo;¿Y cómo transformamos ese recuerdo en{" "}
            <span className="text-[var(--color-gold)]">
              una experiencia real
            </span>
            ?&rdquo;
          </h2>
        </div>
      </div>
    </section>
  );
}
