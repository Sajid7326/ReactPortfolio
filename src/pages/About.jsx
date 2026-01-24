import { useRef, useState } from "react";
import Card from "../components/Card";
import MapModal from "../components/MapModal";

const About = () => {
  const grid2Container = useRef();
  const [openMap, setOpenMap] = useState(false);

  const lat = 23.763111;
  const lon = 90.441417;

  const skills = [
    "ArcGIS Pro","Erdas Imagine","Google Colab","Kobo Toolbox","IBM SPSS",
    "QGIS","Google Earth Engine","Python","R","CSS","HTML","JavaScript",
    "LaTeX","MS Excel","MS Office","MS Powerpoint","AutoCad","Canva","Visio"
  ];

  return (
    <section className="mt-20">
      <h2 className="text-center text-heading">About Me</h2>

      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10 mt-10">

        {/* LEFT GRID (CARDS) */}
        <div className="
          col-span-6 md:col-span-3 rounded-2xl border border-white/10
          backdrop-blur-sm bg-white/5 shadow relative min-h-[15rem]
          hover:scale-[1.04] transition-all duration-300 overflow-hidden
        ">
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

        <div
  onClick={() => setOpenMap(true)}
  className="
    col-span-6 md:col-span-3 relative cursor-pointer overflow-hidden
    rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5
    hover:scale-[1.03] transition-all duration-300 shadow-lg
    min-h-[15rem]
  "
>
  <iframe
    title="Dhaka Location Map"
    src={`https://www.google.com/maps?q=${lat},${lon}&z=16&output=embed`}
    className="absolute inset-0 w-full h-full rounded-xl"
    loading="lazy"
    allowFullScreen
  />

  {/* Text Overlay */}
  <div className="absolute z-20 top-3 left-3">
    <p className="text-[11px] font-medium text-white drop-shadow">Dhaka, Bangladesh</p>
    <p className="text-[10px] text-white/60 mt-[2px] drop-shadow">Click to enlarge map</p>
  </div>

  {/* Fade Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none z-[5]" />
</div>


        {/* SKILLS */}
        <div className="col-span-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 p-6 shadow">
          <p className="text-lg font-semibold text-white mb-3">Software Proficiency</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 text-xs rounded-lg bg-white/10 border border-white/10">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BIG MODAL MAP */}
      <MapModal open={openMap} onClose={() => setOpenMap(false)} lat={lat} lon={lon} />
    </section>
  );
};

export default About;
