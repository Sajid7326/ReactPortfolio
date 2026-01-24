"use client";

import { motion } from "framer-motion";
import React from "react";

export function HoverEffect({ items = [], className }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.10, y: -4 }}
          transition={{ type: "easeout", stiffness: 100, damping: 5 }}
          className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/5 shadow-lg p-5 hover:bg-white/10 transition-all duration-300"
        >
          {/* Title */}
          <p className="text-lg font-bold text-white">
            {item.title}
          </p>

          {/* Workplace */}
          {item.subtitle && (
            <p className="text-sm text-blue-300 font-2xl mt-3">
              {item.subtitle}
            </p>
          )}

          {/* Date */}
          {item.date && (
            <p className="text-xs text-neutral-400 mt-3 mb-3">
              {item.date}
            </p>
          )}

          {item.project && (
       <p className="font-semibold text-neutral-200 mb-3">
               {item.project}
       </p>
       )}

{item.tasks && (
  <ul className="list-disc pl-5 space-y-1 text-neutral-300 text-sm">
    {item.tasks.map((t, i) => (
      <li key={i}>{t}</li>
    ))}
  </ul>
)}

          {/* Website Link */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 text-sm mt-3 hover:underline underline-offset-4"
            >
              Visit Organization →
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}
