import { motion, AnimatePresence } from "motion/react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 max-h-[85vh] overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="
            w-full max-w-2xl
            rounded-2xl
            bg-white dark:bg-neutral-900
            border border-slate-200 dark:border-white/10
            p-6
            shadow-2xl
          "
        >
          {/* Title */}
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-slate-700 dark:text-white/70">
            {project.description}
          </p>

          {/* Accordion */}
 {project.subDescription?.length > 0 && (
  <div className="mt-6">
    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-white/50 mb-3">
      Key Highlights
    </p>

    <ul className="space-y-2">
      {project.subDescription.map((item, i) => (
        <li
          key={i}
          className="
            flex items-start gap-2
            text-sm
            text-slate-700 dark:text-white/70
            leading-relaxed
          "
        >
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}


          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
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

          {/* Link */}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-medium text-slate-900 dark:text-white hover:underline"
            >
              Open Project →
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
