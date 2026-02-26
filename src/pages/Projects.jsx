import { useState } from "react";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [preview, setPreview] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 120 });
  const springY = useSpring(y, { damping: 20, stiffness: 120 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative max-w-6xl mx-auto px-6 pt-28 pb-20"
    >
      <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
        Academic Posters
      </h2>

      <div className="mt-12 space-y-10">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            project={project}
            onOpen={setActiveProject}
            setPreview={setPreview}
          />
        ))}
      </div>

      {/* Desktop Preview */}
      {preview && (
        <motion.img
          src={preview}
          alt="Preview"
          className="
            hidden lg:block
            fixed z-50
            h-44 w-80
            object-cover
            rounded-xl
            shadow-2xl
            pointer-events-none
          "
          style={{ x: springX, y: springY }}
        />
      )}

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

export default Projects;
