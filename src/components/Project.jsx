import { motion } from "motion/react";

const Project = ({ project, onOpen, setPreview }) => {
  return (
    <motion.article
      onClick={() => onOpen(project)}
      onMouseEnter={() => setPreview?.(project.image)}
      onMouseLeave={() => setPreview?.(null)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        cursor-pointer
        relative rounded-2xl border
        bg-white border-slate-200
        p-6
        shadow-sm hover:shadow-xl
        transition-all

        dark:bg-neutral-900
        dark:border-white/10
      "
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-3 text-sm text-slate-700 dark:text-white/70">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags?.map((tag) => (
          <span
            key={tag.id}
            className="
              text-xs px-3 py-1 rounded-full
              bg-slate-100 text-slate-700
              dark:bg-white/10 dark:text-white/70
            "
          >
            {tag.name}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default Project;
