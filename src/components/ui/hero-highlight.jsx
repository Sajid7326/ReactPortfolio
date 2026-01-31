"use client";
import React from "react";
import { motion } from "motion/react";

/* Container that staggers children */
export const HeroHighlight = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.18, // 👈 stagger timing
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

/* Individual highlight animation */
export const Highlight = ({ children, className = "" }) => {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.35,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={`
        inline-block px-2 py-0.5 rounded-md
        bg-indigo-500 text-white
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
};
