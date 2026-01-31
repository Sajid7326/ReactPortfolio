"use client";
import { motion } from "framer-motion";
import React from "react";

export const TypewriterEffectSmooth = ({
  words,
  className = "",
}) => {
  const letters = words.flatMap((word, idx) =>
    word.text.split("").map((char, charIdx) => ({
      char,
      className: word.className || "",
      key: `${idx}-${charIdx}`,
    }))
  );

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {letters.map((l, i) => (
        <motion.span
          key={l.key}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.05,
            duration: 0.3,
            ease: "easeOut",
          }}
          className={`text-sm md:text-base font-medium text-white/70 ${l.className}`}
        >
          {l.char}
        </motion.span>
      ))}
    </div>
  );
};
