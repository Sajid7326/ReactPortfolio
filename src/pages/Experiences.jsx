import { HoverEffect } from "../components/ui/card-hover-effect";
import { workCards } from "../constants/workCards";

const Experiences = () => {
  return (
    <section className="pt-28 pb-20 bg-white dark:bg-transparent">
      
      {/* ===== SECTION TITLE ===== */}
      <h2 className="
        text-center
        text-4xl md:text-5xl
        font-bold
        text-slate-900
        dark:text-white
        mb-12
      ">
        Work Experience
      </h2>

      {/* ===== CARDS ===== */}
      <div className="max-w-6xl mx-auto px-6">
        <HoverEffect items={workCards} />
      </div>

    </section>
  );
};

export default Experiences;
