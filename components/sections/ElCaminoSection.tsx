"use client";

import Image from "next/image";

const MOMENTOS = [
  {
    año: "1960",
    titulo: "Villa Fiorito",
    subtitulo: "Donde todo comenzó",
    color: "#D4AF37",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1920&q=80&auto=format",
    imageAlt: "Pelota de fútbol en campo de tierra",
    overlay: "from-black/80 via-black/50 to-black/80",
  },
  {
    año: "1984",
    titulo: "Nápoles",
    subtitulo: "Una ciudad lo adoptó como un dios",
    color: "#12A0D7",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=80&auto=format",
    imageAlt: "Costa de Nápoles, Italia",
    overlay: "from-black/80 via-black/40 to-black/80",
  },
  {
    año: "1986",
    titulo: "El Gol del Siglo",
    subtitulo: "Engañó a medio mundo y lo hizo eterno",
    color: "#F0C040",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80&auto=format",
    imageAlt: "Estadio de fútbol épico",
    overlay: "from-black/80 via-black/40 to-black/80",
  },
  {
    año: "1986",
    titulo: "La Mano de Dios",
    subtitulo: "Hasta el cielo jugó a su lado",
    color: "#D4AF37",
    image: "/assets/images/hero-estadio.jpg",
    imageAlt: "Estadio épico - La Mano de Dios contra Inglaterra 1986",
    overlay: "from-black/80 via-black/50 to-black/80",
  },
  {
    año: "1987",
    titulo: "Scudetto",
    subtitulo: "Nápoles campeón por primera vez",
    color: "#003C82",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80&auto=format",
    imageAlt: "Pelota de fútbol dramática",
    overlay: "from-black/75 via-black/40 to-black/80",
  },
  {
    año: "2025",
    titulo: "El Legado Vive",
    subtitulo: "GOOBY lo hace eterno",
    color: "#D4AF37",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format",
    imageAlt: "Tecnología y conexión digital global",
    overlay: "from-black/80 via-black/50 to-black/80",
  },
];

export default function ElCaminoSection() {
  return (
    <section className="w-full">
      {MOMENTOS.map((momento, i) => (
        <div
          key={i}
          className="relative w-full h-screen flex items-end pb-16 md:pb-24 px-8 md:px-16 overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={momento.image}
              alt={momento.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              quality={80}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${momento.overlay}`}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 40% 60%, ${momento.color}18, transparent 65%)`,
              }}
            />
          </div>

          {/* Year watermark */}
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none"
            style={{
              fontSize: "28vw",
              color: "transparent",
              WebkitTextStroke: `2px ${momento.color}25`,
            }}
          >
            {momento.año}
          </span>

          {/* Content */}
          <div className="relative z-10 flex items-end gap-6">
            <div
              className="w-12 h-px flex-shrink-0 mb-3"
              style={{ background: momento.color }}
            />
            <div>
              <p
                className="font-[family-name:var(--font-barlow)] text-xs tracking-widest uppercase mb-2"
                style={{ color: momento.color }}
              >
                {momento.año}
              </p>
              <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] text-white leading-none mb-3">
                {momento.titulo}
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-[var(--color-champagne)] text-base md:text-lg italic max-w-sm">
                {momento.subtitulo}
              </p>
            </div>
          </div>

          {/* Panel number */}
          <span
            className="absolute bottom-6 right-6 font-[family-name:var(--font-bebas)] text-xl"
            style={{ color: `${momento.color}50` }}
          >
            0{i + 1} / 0{MOMENTOS.length}
          </span>
        </div>
      ))}
    </section>
  );
}
