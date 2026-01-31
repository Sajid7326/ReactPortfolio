"use client";
import React from "react";

export function TextHoverEffect({ text, className = "" }) {
  return (
    <span
      className={`
        relative inline-block cursor-default
        font-mono tracking-wide
        text-white/80
        transition-colors duration-300
        hover:text-cyan-400
        ${className}
      `}
    >
      {/* Text */}
      {text}

      {/* Underline */}
      <span
        className="
          pointer-events-none
          absolute left-0 -bottom-1
          h-[1.5px] w-full
          bg-gradient-to-r from-cyan-400 to-blue-500
          scale-x-0
          origin-left
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
      />
    </span>
  );
}
