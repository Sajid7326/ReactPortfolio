import { useRef, useState } from "react";
import Card from "../components/Card";
import MapModal from "../components/MapModal";
import AboutProfileModal from "../components/AboutProfileModal";
import { LampContainer } from "../components/lamp";
import { EncryptedText } from "../components/ui/encrypted-text";
import ParallaxParticles from "../components/ParallaxParticles";

const About = () => {
  const grid2Container = useRef(null);

  const [openMap, setOpenMap] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const lat = 23.763111;
  const lon = 90.441417;

  const skills = [
    "ArcGIS Pro","Erdas Imagine","Google Colab","Kobo Toolbox","IBM SPSS",
    "QGIS","Google Earth Engine","Python","R","CSS","HTML","JavaScript",
    "LaTeX","MS Excel","MS Office","MS PowerPoint","AutoCAD","Canva","Visio"
  ];

  return (
    <>
      {/* Background particles */}
      <ParallaxParticles />

      <section className="relative z-10 pt-28 pb-20">

        {/* ================= HERO ================= */}
        <LampContainer>
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center">

              {/* Image */}
              <div className="md:col-span-2 flex justify-center mt-24 md:mt-16">
                <div
                  className="
                    w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden
                    border border-slate-300 dark:border-white/20
                    shadow-md dark:shadow-lg
                  "
                >
                  <img
                    src="/assets/photo.png"
                    alt="Syed Shoabul Islam"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Syed Shoabul Islam
                </h2>

                {/* Encrypted Role */}
                <div className="mt-3">
                  <EncryptedText
                    text="Geographic Information System (GIS) Analyst"
                    encryptedClassName="
                      text-slate-500/60
                      dark:text-cyan-400/40
                    "
                    revealedClassName="
                      text-slate-900
                      dark:text-cyan-300
                      tracking-wide
                    "
                    revealDelayMs={40}
                  />
                </div>

                {/* Read Profile Button */}
                <div className="mt-4 flex justify-center md:justify-start">
                  <button
                    onClick={() => setOpenAbout(true)}
                    className="
                      text-xs md:text-sm
                      text-slate-900
                      dark:text-cyan-300

                      border border-slate-400
                      dark:border-cyan-400/30

                      px-4 py-1.5 rounded-full

                      hover:bg-slate-900/5
                      dark:hover:bg-cyan-400/10

                      transition
                    "
                  >
                    Read full profile →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </LampContainer>

        {/* ================= CONCEPT + MAP ================= */}
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

          {/* Concept */}
          <div
            className="
              col-span-6 md:col-span-3
              rounded-2xl
              border border-slate-200 dark:border-white/10
              bg-white dark:bg-white/5
              backdrop-blur-sm
              shadow-sm dark:shadow
              min-h-[16rem]
            "
          >
            <div
              ref={grid2Container}
              className="relative z-40 w-full h-full flex items-center justify-center"
            >
              <p className="text-xl md:text-2xl text-slate-600 dark:text-white/80 select-none">
                CITIES ARE CANVAS
              </p>

              <Card style={{ rotate:"75deg", top:"30%", left:"20%" }} text="DESIGN" containerRef={grid2Container}/>
              <Card style={{ rotate:"-30deg", top:"60%", left:"46%" }} text="FUTURE" containerRef={grid2Container}/>
              <Card style={{ rotate:"90deg", bottom:"28%", left:"68%" }} text="VISION" containerRef={grid2Container}/>
              <Card style={{ rotate:"-45deg", top:"58%", left:"-2%" }} text="SUSTAINABLE" containerRef={grid2Container}/>
              <Card style={{ rotate:"20deg", top:"8%", left:"38%" }} text="RESILIENCE" containerRef={grid2Container}/>
              <Card style={{ rotate:"30deg", top:"72%", left:"70%" }} image="/assets/logos/arc.png" containerRef={grid2Container}/>
              <Card style={{ rotate:"-45deg", top:"70%", left:"25%" }} image="/assets/logos/qgis.png" containerRef={grid2Container}/>
              <Card style={{ rotate:"-48deg", top:"4%", left:"10%" }} image="/assets/logos/gee.png" containerRef={grid2Container}/>
            </div>
          </div>

          {/* Map */}
          <div
            onClick={() => setOpenMap(true)}
            className="
              col-span-6 md:col-span-3
              relative cursor-pointer overflow-hidden
              rounded-2xl
              border border-slate-200 dark:border-white/10
              bg-white dark:bg-white/5
              backdrop-blur-sm
              hover:scale-[1.05] transition-all duration-300
              shadow-md dark:shadow-lg
              min-h-[16rem]
            "
          >
            <iframe
              title="Location Map"
              src={`https://www.google.com/maps?q=${lat},${lon}&z=16&output=embed`}
              className="absolute inset-0 w-full h-full rounded-xl"
              loading="lazy"
              allowFullScreen
            />

            <div className="absolute z-20 top-4 right-6">
              <p className="text-[11px] font-medium text-slate-900 dark:text-white">
              </p>
              <p className="text-[10px] text-slate-500 dark:text-white/60">
                Click to enlarge map
              </p>
            </div>
          </div>

          {/* Skills */}
          <div
            className="
              col-span-6 rounded-2xl
              border border-slate-200 dark:border-white/10
              bg-white dark:bg-white/5
              backdrop-blur-sm
              p-6 shadow-sm dark:shadow
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            <p className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Software Proficiency
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="
                    px-3 py-1 text-xs rounded-lg
                    bg-slate-100 text-slate-700 border border-slate-200
                    dark:bg-white/10 dark:text-white dark:border-white/10
                    transition-all duration-200
                    hover:bg-slate-900/10 hover:text-slate-900
                    dark:hover:bg-cyan-400/20 dark:hover:text-cyan-300
                  "
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MODALS ================= */}
        <MapModal open={openMap} onClose={() => setOpenMap(false)} lat={lat} lon={lon} />
        <AboutProfileModal open={openAbout} onClose={() => setOpenAbout(false)} />
      </section>
    </>
  );
};

export default About;
