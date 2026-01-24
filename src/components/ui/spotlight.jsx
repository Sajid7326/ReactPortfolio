"use client";
import React from "react";

export function Spotlight({ className = "", fill = "white" }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width="900"
      height="900"
      viewBox="0 0 600 600"
    >
      <defs>
        <radialGradient id="spot-gradient">
          <stop offset="0%" stopColor={fill} stopOpacity="0.55" />
          <stop offset="60%" stopColor={fill} stopOpacity="0.14" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="300" cy="300" r="300" fill="url(#spot-gradient)" />
    </svg>
  );
}
