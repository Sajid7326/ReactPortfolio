import { useRef, useState } from "react";
import Card from "../components/Card";
import MapModal from "../components/MapModal";
import { LampContainer } from "../components/lamp";
import { EncryptedText } from "../components/ui/encrypted-text";
import AboutProfileModal from "../components/AboutProfileModal";

const About = () => {
  const grid2Container = useRef();

  const [openMap, setOpenMap] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const lat = 23.763111;
  const lon = 90.441417;

  const skills = [
    "ArcGIS Pro","Erdas Imagine","Google Colab","Kobo Toolbox","IBM SPSS",
    "QGIS","Google Earth Engine","Python","R","CSS","HTML","JavaScript",
    "LaTeX","MS Excel","MS Office","MS Powerpoint","AutoCad","Canva","Visio"
  ];

  return (
    <section className="pt-28 pb-20">

      {/* ================= HERO (WITH LAMP) ================= */}
      <LampContainer>
        <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center">

            {/* Image */}
            <div className="md:col-span-2 flex justify-center mt-24 md:mt-16">
              <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border border-white/20 shadow-lg">
                <img
                  src="/assets/photo.png"
                  alt="Syed Shoabul Islam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Syed Shoabul Islam
              </h2>

              {/* ENCRYPTED ROLE */}
              <div className="mt-3">
                <EncryptedText
                  text="Geographic Information System (GIS) Analyst"
                  encryptedClassName="text-cyan-400/40"
                  revealedClassName="text-cyan-300 tracking-wide"
                  revealDelayMs={40}
                />
              </div>

              {/* FULL PROFILE BUTTON */}
              <div className="mt-4 flex justify-center md:justify-start">
                <button
                  onClick={() => setOpenAbout(true)}
                  className="text-xs md:text-sm text-cyan-300 border border-cyan-400/30 
                             px-4 py-1.5 rounded-full hover:bg-cyan-400/10 transition"
                >
                  Read full profile →
                </button>
              </div>
            </div>

          </div>
        </div>
      </LampContainer>

      {/* ================= CONCEPT + MAP ================= */}
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

        {/* Concept */}
        <div className="col-span-6 md:col-span-3 rounded-2xl border border-white/10
                        backdrop-blur-sm bg-white/5 shadow relative min-h-[16rem]
                        hover:scale-[1.05] transition-all duration-300 overflow-hidden">
          <div ref={grid2Container} className="relative flex items-center justify-center w-full h-full">
            <p className="text-3xl md:text-4xl lg:text-5xl text-white/80">
              CITIES ARE CANVAS
            </p>

            <Card style={{ rotate:"75deg", top:"30%", left:"20%" }} text="DESIGN" containerRef={grid2Container}/>
            <Card style={{ rotate:"-30deg", top:"60%", left:"46%" }} text="FUTURE" containerRef={grid2Container}/>
            <Card style={{ rotate:"90deg", bottom:"28%", left:"68%" }} text="VISION" containerRef={grid2Container}/>
            <Card style={{ rotate:"-45deg", top:"58%", left:"-2%" }} text="SUSTAINABLE" containerRef={grid2Container}/>
            <Card style={{ rotate:"20deg", top:"8%", left:"38%" }} text="RESILIENCE" containerRef={grid2Container}/>
            <Card style={{ rotate:"30deg", top:"72%", left:"70%" }} image="assets/logos/arc.png" containerRef={grid2Container}/>
            <Card style={{ rotate:"-45deg", top:"70%", left:"25%" }} image="assets/logos/qgis.png" containerRef={grid2Container}/>
            <Card style={{ rotate:"-48deg", top:"4%", left:"10%" }} image="assets/logos/gee.png" containerRef={grid2Container}/>
          </div>
        </div>

        {/* Map */}
        <div
          onClick={() => setOpenMap(true)}
          className="col-span-6 md:col-span-3 relative cursor-pointer overflow-hidden
                     rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5
                     hover:scale-[1.05] transition-all duration-300 shadow-lg min-h-[16rem]"
        >
          <iframe
            title="Dhaka Location Map"
            src={`https://www.google.com/maps?q=${lat},${lon}&z=16&output=embed`}
            className="absolute inset-0 w-full h-full rounded-xl"
            loading="lazy"
            allowFullScreen
          />

          <div className="absolute z-20 top-3 left-3">
            <p className="text-[11px] font-medium text-white">Dhaka, Bangladesh</p>
            <p className="text-[10px] text-white/60">Click to enlarge map</p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent z-[5]" />
        </div>

        {/* Skills */}
        <div className="col-span-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 p-6 shadow">
          <p className="text-lg font-semibold text-white mb-3">Software Proficiency</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => (
              <span key={s} className="px-3 py-1 text-xs rounded-lg bg-white/10 border border-white/10">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MAP MODAL */}
      <MapModal open={openMap} onClose={() => setOpenMap(false)} lat={lat} lon={lon} />

      {/* ABOUT PROFILE MODAL (WITH HIGHLIGHTS INSIDE) */}
      <AboutProfileModal open={openAbout} onClose={() => setOpenAbout(false)} />
    </section>
  );
};

export default About;
