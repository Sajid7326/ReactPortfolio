"use client";
import React from "react";
import { motion } from "motion/react";

export function LampContainer({ children, className }) {
  return (
    <div className={`relative flex flex-col items-center ${className || ""}`}>

      {/* ===== DARK MODE ONLY: OUTER GLOW ===== */}
      <motion.div
        initial={{ opacity: 0, width: 2 }}
        animate={{ opacity: 1, width: "100%", scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          absolute top-0 h-[400px] rounded-full blur-[60px]
          hidden dark:block
          bg-cyan-800/30
        "
      />

      {/* ===== DARK MODE ONLY: INNER GLOW ===== */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
        className="
          absolute top-8 h-[220px] w-[600px] rounded-full blur-[90px]
          hidden dark:block
          bg-cyan-600/30
        "
      />

      {/* ===== LAMP BEAM / OUTLINE ===== */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1.2 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="
          absolute top-[1px] w-[300px] h-[2px]

          bg-slate-900
          dark:bg-cyan-300/70
        "
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
