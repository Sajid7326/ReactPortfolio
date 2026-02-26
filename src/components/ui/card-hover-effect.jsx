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
          whileHover={{ scale: 1.06, y: -4 }}
          transition={{ type: "easeOut", stiffness: 120, damping: 12 }}
          className="
            group relative cursor-pointer rounded-2xl
            border border-neutral-200
            bg-white
            shadow-md
            p-5
            pb-14
            transition-all duration-300

            dark:border-white/10
            dark:bg-white/5
            dark:shadow-lg
            hover:shadow-xl
            dark:hover:bg-white/10
          "
        >
          {/* ===== TITLE ===== */}
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            {item.title}
          </p>

          {/* ===== WORKPLACE ===== */}
          {item.subtitle && (
            <p className="text-sm font-medium mt-3 text-blue-600 dark:text-blue-300">
              {item.subtitle}
            </p>
          )}

          {/* ===== DATE ===== */}
          {item.date && (
            <p className="text-xs mt-3 mb-3 text-slate-500 dark:text-neutral-400">
              {item.date}
            </p>
          )}

          {/* ===== PROJECT ===== */}
          {item.project && (
            <p className="font-semibold mb-3 text-slate-700 dark:text-neutral-200">
              {item.project}
            </p>
          )}

          {/* ===== TASKS ===== */}
          {item.tasks && (
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-neutral-300">
              {item.tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          )}

          {item.pdf && (
          <a
         href={item.pdf}
         target="_blank"
         rel="noopener noreferrer"
                     className="mt-4 w-full inline-flex items-center justify-center gap-2
                                rounded-xl py-3 font-semibold text-black
                                bg-gradient-to-r from-cyan-500 to-blue-600
                                shadow-md transition-all duration-300
                                hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]
                                hover:scale-[1.02]"
                                      >
                           <span className="text-lg">📄</span>
                           <span>View Policy Draft (PDF)</span>
            </a>
              )}

          {/* ===== LINK (BOTTOM CENTER) ===== */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                text-sm font-medium
                text-blue-600 hover:underline underline-offset-4
                dark:text-blue-300
              "
            >
              Visit Organization →
            </a>
          )}
          
        </motion.div>
      ))}
    </div>
  );
}
