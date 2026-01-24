"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar({ children }) {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur bg-black/30 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </motion.nav>
  );
}

export function NavBody({ children }) {
  return (
    <div className="hidden md:flex h-16 items-center justify-between">
      {children}
    </div>
  );
}

export function NavItems({ items }) {
  return (
    <div className="flex gap-6">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          className="text-sm text-neutral-300 hover:text-white transition"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

export function NavbarLogo({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="text-lg font-semibold text-white tracking-wide"
    >
      Syed Shoabul Islam
    </motion.button>
  );
}

export function MobileNav({ children }) {
  return <div className="md:hidden flex flex-col">{children}</div>;
}

export function MobileNavHeader({ children }) {
  return (
    <div className="flex h-16 items-center justify-between">{children}</div>
  );
}

export function MobileNavToggle({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md text-neutral-300 hover:text-white"
    >
      {isOpen ? "✕" : "☰"}
    </button>
  );
}

export function MobileNavMenu({ isOpen, children }) {
  return (
    isOpen && (
      <div className="flex flex-col gap-4 py-3 text-neutral-300 text-sm">
        {children}
      </div>
    )
  );
}
