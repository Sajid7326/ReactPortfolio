import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "Urban Planning & Site Design",
    "Geospatial Analysis",
    "Disaster Risk Assessment",
    "Project Planning & Management",
    "Remote Sensing & GIS",
    "Landscape Architecture",
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-20 mt-10 text-left md:mt-55 md:text-left rounded-2xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I am Syed Shoabul Islam
        </motion.h1>

        <div className="flex flex-col items-start space-y-3">
          <motion.p
            className="text-8xl font-bold text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Graduate Urban Planner
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl font-medium text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            I make maps to make sense of our world
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-4xl md:text-5xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-3 md:hidden items-start text-left mt-70">
        <motion.p
          className="text-3xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I am Syed Shoabul Islam
        </motion.p>

        <motion.p
          className="text-5xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Graduate Urban Planner
        </motion.p>

        <motion.p
          className="text-xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
        >
          I make maps to make sense of our world
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          <FlipWords
            words={words}
            className="font-bold text-white text-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
