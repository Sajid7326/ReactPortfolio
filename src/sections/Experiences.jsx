import Timeline from "../components/Timeline";
import { myExperience } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={myExperience} />
    </div>
  );
};

export default Experiences;
