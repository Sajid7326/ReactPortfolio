import { motion, useScroll, useTransform } from "motion/react";
import { LampContainer } from "../components/lamp";


const ParallaxBackground = ({ navbar, children, showLamp }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 10], [0, -10]);

return (
  <section className="relative  bg-[#050715] overflow-hidden">

    {/* NAVBAR (always on top) */}
    <div className="fixed top-0 left-0 w-auto z-[100] pointer-events-auto">
      {navbar}
    </div>

    {/* Lamp */}
    {showLamp && (
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-[20] pointer-events-none">
        <LampContainer />
      </div>
    )}

    {/* Hero */}
    <div className="relative z-[10] flex items-center justify-center  pointer-events-auto">
      <div className="mt-20">
        {children}
      </div>
    </div>

  </section>
);

};

export default ParallaxBackground;
