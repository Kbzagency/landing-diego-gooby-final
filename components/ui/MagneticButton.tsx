"use client";

import { useRef } from "react";

export default function MagneticButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.transform = `translate(${(e.clientX - r.left - r.width / 2) / 4}px, ${(e.clientY - r.top - r.height / 2) / 4}px)`;
  };

  const onLeave = () => {
    ref.current!.style.transition =
      "transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275)";
    ref.current!.style.transform = "translate(0,0)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 500);
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative px-10 py-4 border border-[var(--color-gold)] text-[var(--color-gold)] overflow-hidden font-[family-name:var(--font-barlow)] tracking-widest uppercase text-sm hover:text-black transition-colors duration-300"
      style={{ willChange: "transform" }}
    >
      <span className="absolute inset-0 bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
