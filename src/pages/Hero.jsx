import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/lamp";
import { ContainerTextFlip } from "../components/ui/container-text-flip";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";





export default function Hero() {
  return (
    <section className="relative  min-h-screen bg-[#050712] text-white px-6 md:px-12">

      {/* Lamp absolutely pinned to top */}
      <LampContainer className="absolute top-0 left-1/2 -translate-x-1/2 z-20 scale-[1.5]" />

      {/* Main Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center  max-w-7xl pt-50 mx-auto">

        {/* Left Text */}
        <div className="flex flex-col gap-5">

          <motion.div
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="flex flex-col gap-5 text-auto"
>
  <p className="text-lg opacity-180">Hi, I am Shoabul</p>
  <p className="text-2xl opacity-80">I make maps to make sense the world!</p>

  <h1 className="text-3xl md:text-5xl font-bold">
    <TypewriterEffectSmooth
      words={[
        { text: "GIS Analyst", className: "text-cyan-400" },
      ]}
    />
  </h1>
</motion.div>


         <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="opacity-80 text-lg font-light"
          >
            <div className="px-4 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-fit mt-2 text-[1rem] font-medium">
          <ContainerTextFlip
              words={[
              "Hazard Analysis",
              "Urban Planning",
              "Disaster Risk Modeling",
              "Site and Area Planning",
              "Landscape Architecture",
              "Spatial Adjustment",
              "Landuse Prediction",
            
    ]}
  />
</div>


</motion.div>

        </div>

        {/* Portrait */}
        <motion.img
          src="/assets/photo.png"
          alt="Portrait"
          className="w-[380px] h-[380px] rounded-full object-contain scale-[0.88] shadow-[0_0_28px_rgba(255,255,255,0.08)] ring-2 ring-white/10"
          initial={{ opacity: 0, y: 20, scale: 1.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.7, ease: "easeOut", delay: 0.15,}}
        />
      </div>
    </section>
  );
}
