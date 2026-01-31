import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/lamp";
import { ContainerTextFlip } from "../components/ui/container-text-flip";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050712] text-white"
    >
      {/* ================= SVG PARALLAX BACKGROUND ================= */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#1D293D" strokeOpacity=".6" d="M-15 702H1440" />
        <path stroke="#1D293D" strokeOpacity=".6" d="M-15 574H1440" />
        <path stroke="#1D293D" strokeOpacity=".6" d="M-15 164H1440" />

        <circle cx="720" cy="360" r="300" stroke="#1D293D" strokeOpacity=".6" />
        <circle cx="80" cy="80" r="300" stroke="#1D293D" strokeOpacity=".6" />
        <circle cx="820" cy="420" r="300" stroke="#1D293D" strokeOpacity=".6" />
      </svg>

      {/* ================= LAMP GLOW ================= */}
      <LampContainer className="absolute top-0 left-1/2 -translate-x-1/2 z-10 scale-[1.4]" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ---------- LEFT CONTENT ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Intro badge */}
            <div className="w-fit px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur text-xs tracking-wide">
              👋 Hi, I’m Shoabul
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              I make maps to make sense of the world
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold">
              <TypewriterEffectSmooth
                words={[
                  { text: "GIS Analyst", className: "text-cyan-400" },
                ]}
              />
            </h2>

            <div className="mt-2">
              <div className="px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-fit text-sm font-medium">
                <ContainerTextFlip
                  words={[
                    "Hazard Analysis",
                    "Urban Planning",
                    "Disaster Risk Modeling",
                    "Site & Area Planning",
                    "Landscape Architecture",
                    "Spatial Adjustment",
                    "Land Use Prediction",
                  ]}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#projects"
                className="bg-white text-black px-7 py-3 rounded-full font-medium
                           hover:bg-slate-200 active:scale-95 transition"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="border border-white/20 px-7 py-3 rounded-full
                           hover:bg-white/10 active:scale-95 transition"
              >
                About Me
              </a>
            </div>
          </motion.div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/assets/photo.png"
              alt="Shoabul portrait"
              className="w-[320px] h-[320px] md:w-[380px] md:h-[380px]
                         rounded-full object-cover
                         ring-2 ring-white/10
                         shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
