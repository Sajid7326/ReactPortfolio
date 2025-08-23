import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = ({ navbar, children }) => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });


  return (
    <section className="relative w-full h-screen bg-black/40">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/riv.gif)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />


        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Navbar at the very top */}
          <div className="w-full">{navbar}</div>

          {/* Hero or children centered */}
          <div className="flex-1 flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
