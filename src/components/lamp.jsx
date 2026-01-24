"use client";
import React from "react";
import { motion } from "motion/react";

export function LampContainer({ children, className }) {
  return (
    <div className={`relative flex flex-col items-center ${className || ""}`}>
      {/* glow */}
      <motion.div
        initial={{ opacity: 1, width: 2 }}
        animate={{ opacity: 1, width: "100%", scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 h-[400px] rounded-full bg-FFD87A-800/30 blur-[100px]"
      />

      {/* glow inner */}
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8,   ease: "easeInOut", }}
        className="absolute top-8 h-[200px] w-[600px] bg-cyan-600/30 rounded-full blur-[90px]"
      />

      {/* beam line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1.2 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute top-[10px] w-[300px] h-[3px] bg-cyan-300/70"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
