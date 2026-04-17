"use client";

import { useState, useEffect } from "react";

/**
 * Shows a fullscreen gate when the site is opened from a desktop or tablet,
 * asking the user to open the link from a mobile device.
 * The experience was designed for mobile viewing.
 */
export default function MobileOnlyGate() {
  const [showGate, setShowGate] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkDevice = () => {
      const width = window.innerWidth;
      const ua = navigator.userAgent || "";
      const isMobileUA =
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

      // Consider el dispositivo MÓVIL si:
      //  - el UA es mobile (celular real), O
      //  - el ancho es chico (< 768px)
      // Solo mostramos el cartel si NO es móvil (tablet grande / PC / laptop).
      const isMobile = isMobileUA || width < 768;
      setShowGate(!isMobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!mounted || !showGate) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center text-center px-8"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, rgba(20,20,25,0.98), rgba(0,0,0,1))",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Logo infinito GOOBY arriba */}
      <div className="mb-10">
        <svg
          viewBox="0 0 100 50"
          className="w-24 h-12"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gooby-gate-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FF4FE1" />
              <stop offset="100%" stopColor="#4FE1FF" />
            </linearGradient>
          </defs>
          <path
            d="M25,25 C25,10 10,10 10,25 C10,40 25,40 25,25 C25,10 40,10 50,25 C60,40 75,40 75,25 C75,10 60,10 50,25 C40,40 25,40 25,25 Z"
            fill="none"
            stroke="url(#gooby-gate-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Ícono teléfono */}
      <div
        className="flex items-center justify-center mb-8 relative"
        style={{
          width: "90px",
          height: "140px",
          borderRadius: "22px",
          border: "2px solid rgba(212,175,55,0.4)",
          boxShadow: "0 0 40px rgba(212,175,55,0.2), inset 0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="absolute rounded-full bg-[var(--color-gold,#D4AF37)]"
          style={{
            width: "24px",
            height: "4px",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.5,
          }}
        />
        <span
          className="text-4xl"
          style={{
            filter: "drop-shadow(0 0 10px rgba(212,175,55,0.6))",
          }}
        >
          📱
        </span>
      </div>

      {/* Label */}
      <p
        className="uppercase mb-4"
        style={{
          color: "#D4AF37",
          letterSpacing: "0.4em",
          fontSize: "11px",
          fontFamily: "var(--font-barlow)",
        }}
      >
        Solo desde móvil
      </p>

      {/* Título principal */}
      <h1
        className="text-white leading-tight mb-6"
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          letterSpacing: "0.05em",
          maxWidth: "600px",
        }}
      >
        ESTA EXPERIENCIA SE DISEÑÓ
        <br />
        PARA VER DESDE UN CELULAR
      </h1>

      {/* Subtítulo */}
      <p
        className="text-[#E8D9A8] italic leading-relaxed"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
          maxWidth: "500px",
          opacity: 0.9,
        }}
      >
        Abrí el link en tu dispositivo de confianza con{" "}
        <span style={{ color: "#D4AF37", fontStyle: "normal", fontWeight: 600 }}>
          GOOBY
        </span>
      </p>

      {/* Footer sutil */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{ opacity: 0.5 }}
      >
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(212,175,55,0.4), transparent)",
          }}
        />
        <p
          className="uppercase"
          style={{
            color: "#D4AF37",
            letterSpacing: "0.5em",
            fontSize: "10px",
            fontFamily: "var(--font-bebas)",
          }}
        >
          GOOBY
        </p>
      </div>
    </div>
  );
}
