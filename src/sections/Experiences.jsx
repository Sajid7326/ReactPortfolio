import Timeline from "../components/Timeline";
import { myExperience } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-8">
      <Timeline data={myExperience} />
    </div>
  );
};

export default Experiences;
