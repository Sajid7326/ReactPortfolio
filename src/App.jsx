import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-black">
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

