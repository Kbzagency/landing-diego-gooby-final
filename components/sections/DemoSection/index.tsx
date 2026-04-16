"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import ModoHincha from "./ModoHincha";
import ModoMaradona from "./ModoMaradona";

type Mode = null | "hincha" | "maradona";

function getCenter(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

export default function DemoSection() {
  const [activeMode, setActiveMode] = useState<Mode>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [nearPhone, setNearPhone] = useState<"owner" | "fan" | null>(null);
  const ownerPhoneRef = useRef<HTMLDivElement>(null);
  const fanPhoneRef = useRef<HTMLDivElement>(null);
  const braceletRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);
  const rafId = useRef(0);

  const activateMode = useCallback((mode: Mode) => {
    if (navigator.vibrate) navigator.vibrate([80, 30, 150]);
    setActiveMode(mode);
    setIsDragging(false);
    setNearPhone(null);
  }, []);

  // RAF proximity loop — checks real element positions every frame
  const startProximityLoop = useCallback(() => {
    const check = () => {
      if (hasTriggered.current || !braceletRef.current) {
        rafId.current = requestAnimationFrame(check);
        return;
      }

      const bracelet = getCenter(braceletRef.current);

      // Check Owner phone
      if (ownerPhoneRef.current) {
        const phone = getCenter(ownerPhoneRef.current);
        const dist = Math.hypot(bracelet.x - phone.x, bracelet.y - phone.y);
        if (dist < 50) {
          hasTriggered.current = true;
          activateMode("maradona");
          return;
        }
        if (dist < 100) {
          setNearPhone("owner");
          rafId.current = requestAnimationFrame(check);
          return;
        }
      }

      // Check Fan phone
      if (fanPhoneRef.current) {
        const phone = getCenter(fanPhoneRef.current);
        const dist = Math.hypot(bracelet.x - phone.x, bracelet.y - phone.y);
        if (dist < 50) {
          hasTriggered.current = true;
          activateMode("hincha");
          return;
        }
        if (dist < 100) {
          setNearPhone("fan");
          rafId.current = requestAnimationFrame(check);
          return;
        }
      }

      setNearPhone(null);
      rafId.current = requestAnimationFrame(check);
    };
    rafId.current = requestAnimationFrame(check);
  }, [activateMode]);

  const stopProximityLoop = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    setNearPhone(null);
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <section id="experiencia" className="w-full relative overflow-hidden">
      {/* Intro visual */}
      <div className="relative w-full h-[45vw] max-h-64 overflow-hidden">
        <Image
          src="/assets/images/pulsera-verificado.jpg"
          alt="Pulsera GOOBY verificando en celular"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      <div className="py-20 md:py-28">
        <div className="text-center mb-12 px-4">
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase mb-3">
            Una Experiencia
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,10vw,7rem)] text-white leading-none">
            PROBALO VOS MISMO
          </h2>
          <p className="font-[family-name:var(--font-barlow)] text-[var(--color-text-secondary)] text-sm max-w-xs mx-auto" style={{ marginTop: "40px" }}>
            Arrastrá la pulsera hacia un celular
          </p>
        </div>

        {/* Interactive area */}
        <div className="flex items-center justify-center gap-4 md:gap-14 px-4 mb-10 relative">
          {/* LEFT — Dueño */}
          <div
            ref={ownerPhoneRef}
            className="flex flex-col items-center gap-3"
            onClick={() => activateMode("maradona")}
          >
            <div
              className="w-20 h-36 md:w-24 md:h-44 rounded-[1.8rem] border-2 relative overflow-hidden transition-all duration-200"
              style={{
                borderColor: nearPhone === "owner" ? "#D4AF37" : "#D4AF3780",
                background: "linear-gradient(160deg, #D4AF3718, transparent)",
                boxShadow: nearPhone === "owner"
                  ? "0 0 40px #D4AF37A0, 0 0 80px #D4AF3740"
                  : isDragging
                  ? "0 0 30px #D4AF3760"
                  : "0 0 15px #D4AF3720",
                transform: nearPhone === "owner" ? "scale(1.08)" : "scale(1)",
              }}
            >
              <div className="absolute inset-[5px] rounded-[1.4rem] bg-[#050505] flex flex-col items-center justify-center gap-2">
                <span className="text-xl">👑</span>
                <span className="font-[family-name:var(--font-barlow)] text-white text-[10px] uppercase tracking-wider">
                  Dueño
                </span>
              </div>
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-black/80 z-10" />
            </div>
          </div>

          {/* CENTER — Draggable Bracelet */}
          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <motion.div
              ref={braceletRef}
              drag
              dragSnapToOrigin
              dragElastic={0.4}
              onDragStart={() => {
                setIsDragging(true);
                hasTriggered.current = false;
                startProximityLoop();
              }}
              onDragEnd={() => {
                setIsDragging(false);
                stopProximityLoop();

                // Fallback check on drop
                if (!hasTriggered.current && braceletRef.current) {
                  const b = getCenter(braceletRef.current);
                  if (ownerPhoneRef.current) {
                    const p = getCenter(ownerPhoneRef.current);
                    if (Math.hypot(b.x - p.x, b.y - p.y) < 120) {
                      activateMode("maradona");
                      return;
                    }
                  }
                  if (fanPhoneRef.current) {
                    const p = getCenter(fanPhoneRef.current);
                    if (Math.hypot(b.x - p.x, b.y - p.y) < 120) {
                      activateMode("hincha");
                      return;
                    }
                  }
                }
              }}
              whileDrag={{ scale: 1.15, zIndex: 50 }}
              className="cursor-grab active:cursor-grabbing select-none relative"
              style={{ willChange: "transform", touchAction: "none" }}
            >
              <motion.div
                className="w-20 h-28 md:w-28 md:h-40 relative"
                animate={{
                  filter: isDragging
                    ? [
                        "drop-shadow(0 0 8px rgba(212,175,55,0.3))",
                        "drop-shadow(0 0 30px rgba(212,175,55,0.9))",
                        "drop-shadow(0 0 8px rgba(212,175,55,0.3))",
                      ]
                    : [
                        "drop-shadow(0 0 8px rgba(212,175,55,0.2))",
                        "drop-shadow(0 0 18px rgba(212,175,55,0.5))",
                        "drop-shadow(0 0 8px rgba(212,175,55,0.2))",
                      ],
                }}
                transition={{
                  duration: isDragging ? 0.4 : 2.5,
                  repeat: Infinity,
                }}
              >
                <Image
                  src="/assets/images/pulsera-brazo.png"
                  alt="Pulsera D10S en brazo"
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </motion.div>
            </motion.div>
            <p className="font-[family-name:var(--font-barlow)] text-[var(--color-gold-dim)] text-[10px] tracking-widest uppercase">
              Tocá o arrastrá
            </p>
          </div>

          {/* RIGHT — Fan */}
          <div
            ref={fanPhoneRef}
            className="flex flex-col items-center gap-3"
            onClick={() => activateMode("hincha")}
          >
            <div
              className="w-20 h-36 md:w-24 md:h-44 rounded-[1.8rem] border-2 relative overflow-hidden transition-all duration-200"
              style={{
                borderColor: nearPhone === "fan" ? "#75AADB" : "#75AADB80",
                background: "linear-gradient(160deg, #75AADB18, transparent)",
                boxShadow: nearPhone === "fan"
                  ? "0 0 40px #75AADBA0, 0 0 80px #75AADB40"
                  : isDragging
                  ? "0 0 30px #75AADB60"
                  : "0 0 15px #75AADB20",
                transform: nearPhone === "fan" ? "scale(1.08)" : "scale(1)",
              }}
            >
              <div className="absolute inset-[5px] rounded-[1.4rem] bg-[#050505] flex flex-col items-center justify-center gap-2">
                <span className="text-xl">⚽</span>
                <span className="font-[family-name:var(--font-barlow)] text-white text-[10px] uppercase tracking-wider">
                  Fan
                </span>
              </div>
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-black/80 z-10" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 px-4 mt-12">
          <button
            onClick={() => activateMode("maradona")}
            className="font-[family-name:var(--font-barlow)] text-xs tracking-widest uppercase px-5 py-3 border border-[var(--color-gold)]/40 text-[var(--color-gold)] rounded-full hover:border-[var(--color-gold)] transition-colors"
          >
            Ver Modo Maradoniano
          </button>
          <button
            onClick={() => activateMode("hincha")}
            className="font-[family-name:var(--font-barlow)] text-xs tracking-widest uppercase px-5 py-3 border border-[var(--color-celeste)]/40 text-[var(--color-celeste)] rounded-full hover:border-[var(--color-celeste)] transition-colors"
          >
            Ver Modo Hincha
          </button>
        </div>
      </div>

      {/* Fullscreen mode overlays */}
      <AnimatePresence mode="wait">
        {activeMode === "hincha" && (
          <ModoHincha key="hincha" onClose={() => setActiveMode(null)} />
        )}
        {activeMode === "maradona" && (
          <ModoMaradona key="maradona" onClose={() => setActiveMode(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
