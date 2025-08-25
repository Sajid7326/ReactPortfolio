import React from "react";
import { NavbarDemo } from "./sections/NewNavbar";
import Hero from "./sections/Hero";
import ParallaxBackground from "./sections/ParallaxBackground";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import { ArcTimeline } from "./components/arc-timeline";
import { Publications } from "./sections/Publications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NewNavbar from "./sections/NewNavbar";

const App = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Background with Navbar + Hero */}
      <ParallaxBackground navbar={<NewNavbar />}>
        <Hero />
      </ParallaxBackground>

      {/* Sections with IDs + scroll margin so navbar doesn't overlap */}
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

      <section id="contact" className="scroll-mt-20 mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
