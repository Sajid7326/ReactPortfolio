import React from "react";

// Hero Layer Components
import ParallaxBackground from "./pages/ParallaxBackground";
import Hero from "./pages/Hero";   // FIXED HERE
import { motion } from "motion/react";

// Sections
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import { Publications } from "./pages/Publications";
import { Training } from "./pages/Training";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import NewNavbar from "./pages/NewNavbar";

const App = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      
      {/* HERO SECTION */}
      <ParallaxBackground navbar={<NewNavbar />} bg3D={null}>
        <Hero />
      </ParallaxBackground>

      {/* PAGE SECTIONS */}
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

      <section id="contact" className="scroll-mt-20 mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
