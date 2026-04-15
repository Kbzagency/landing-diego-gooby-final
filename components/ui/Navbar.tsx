"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[var(--color-gold)]/15"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="relative w-36 h-14 md:w-44 md:h-16 flex-shrink-0" style={{ mixBlendMode: "screen" }}>
        <Image
          src="/assets/logo-gooby-v2.png"
          alt="GOOBY"
          fill
          className="object-contain object-left"
          sizes="200px"
          priority
        />
      </a>
      <div className="hidden md:flex gap-8">
        {[
          { label: "Universo", href: "#universo" },
          { label: "Experiencia", href: "#experiencia" },
          { label: "Legado", href: "#legado" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-[family-name:var(--font-barlow)] text-xs tracking-widest uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
