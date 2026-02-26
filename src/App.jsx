import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

// Pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Publications from "./pages/Publications";
import Training from "./pages/Training";
import Gallery from "./pages/Gallery";

// Scroll Progress Component
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-[3px] bg-transparent">
      <div
        className="h-full bg-cyan-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden transition-colors">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/education" element={<Education />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/training" element={<Training />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;