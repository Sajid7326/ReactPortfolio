import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ParallaxBackground from "./sections/ParallaxBackground";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import { Publications } from "./sections/Publications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Background with Navbar + Hero */}
      <ParallaxBackground navbar={<Navbar />}>
        <Hero />
      </ParallaxBackground>

      {/* Sections with IDs */}
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experiences />
      </section>

      <section id="education" className="mt-20">
        <Education />
      </section>

      <section id="publications">
        <Publications />
      </section>

      <section id="contact" className="mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
