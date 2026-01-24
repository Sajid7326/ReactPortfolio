import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import me from "../assets/portrait.png";

const words = [
  "Remote Sensing & Spatial Decision-Making",
  "Urban Planning & Project Management",
  "Hazard Modeling & Risk Analysis",
  "Geospatial Analytics & Mapping",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const photoRef = useRef(null);

  // rotating specialization words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-10 py-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT — TEXT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-lg"
          >
            Hi, I am Sajid
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-5xl font-bold mt-2 ml-[-40px]"
          >
            Geographic Information System Analyst
          </motion.h1>

          {/* rotating specialization */}
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white/90 text-lg mt-4"
          >
            {words[index]}
          </motion.p>
        </div>

        {/* RIGHT — PHOTO */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.35)] ring-2 ring-white/10 mx-auto"
        >
          <img
            src={me}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>

      </div>
    </section>
  );
}
