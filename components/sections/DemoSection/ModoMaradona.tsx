"use client";

import { motion } from "motion/react";

export default function ModoMaradona({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #003C82 0%, #0A0A0A 65%, #D4AF3710 100%)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-[#12A0D7] pointer-events-none"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
      />

      <div className="relative z-10 w-full h-full pt-14 pb-4 px-4">
        <iframe
          src="https://dieg-ox-worldtalents.vercel.app/#maradoniano"
          className="w-full h-full rounded-2xl border border-[var(--color-gold)]/20"
          allow="accelerometer; gyroscope"
        />
      </div>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 font-[family-name:var(--font-barlow)] text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors bg-black/40 px-4 py-2 rounded-full"
      >
        ✕ CERRAR
      </button>
    </motion.div>
  );
}
