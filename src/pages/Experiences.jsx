import Timeline from "../components/Timeline";
import { myExperience } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <section id="experience" className="scroll-mt-10 pb-20">
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-8">
      <Timeline data={myExperience} />
    </div>
    </section>
  );
};

export default Experiences;
