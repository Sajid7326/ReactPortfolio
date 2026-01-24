"use client";

import React from "react";
import { motion } from "framer-motion";

export function TextHoverEffect({ text }) {
  return (
    <div className="relative inline-block group cursor-default">
      <motion.span
        className="text-4xl md:text-6xl font-bold tracking-tight text-white"
      >
        {text}
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 blur-md text-cyan-400 transition-opacity duration-300 pointer-events-none"
      >
        {text}
      </motion.span>
    </div>
  );
}
