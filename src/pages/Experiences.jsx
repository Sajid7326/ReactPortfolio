import { HoverEffect } from "../components/ui/card-hover-effect";
import { workCards } from "../constants/workCards";

const Experiences = () => {
  return (
    <section id="experience" className="scroll-mt-10 py-20">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-10">
        Work Experience
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <HoverEffect items={workCards} />
      </div>
    </section>
  );
};

export default Experiences;
