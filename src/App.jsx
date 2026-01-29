import React from "react";
import { motion } from "motion/react";

import NewNavbar from "./pages/NewNavbar";
import ParallaxBackground from "./pages/ParallaxBackground";

// Sections
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import { Publications } from "./pages/Publications";
import { Training } from "./pages/Training";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <ParallaxBackground navbar={<NewNavbar />} bg3D={null}>
        <Hero />
      </ParallaxBackground>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="experience" className="scroll-mt-20">
        <Experiences />
      </section>

      <section id="education" className="scroll-mt-20 mt-20">
        <Education />
      </section>

      <section id="publications" className="scroll-mt-20">
        <Publications />
      </section>

      <section id="training" className="scroll-mt-20">
        <Training />
      </section>

      <section id="gallery" className="scroll-mt-20">
        <Gallery />
      </section>

      <Footer />
    </div>
  );
};

export default App;
