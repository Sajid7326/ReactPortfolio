import { motion } from "motion/react";

const Project = ({
  title,
  description,
  tags,
  image,
  link,
  setPreview,
}) => {
  return (
    <motion.article
      onMouseEnter={() => setPreview(image)}
      onMouseLeave={() => setPreview(null)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="
        relative
        mb-10
        rounded-2xl
        border
        bg-white
        border-neutral-200
        shadow-sm
        hover:shadow-xl
        transition-all

        dark:bg-neutral-900
        dark:border-white/10
      "
    >
      <div className="p-6 space-y-4">
        {/* ===== TITLE ===== */}
        <h3
          className="
            text-xl font-semibold
            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h3>

        {/* ===== DESCRIPTION ===== */}
        <p
          className="
            text-sm leading-relaxed
            text-slate-700
            dark:text-white/70
          "
        >
          {description}
        </p>

        {/* ===== TAGS ===== */}
        <div className="flex flex-wrap gap-3 pt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="
                text-xs font-medium
                px-3 py-1 rounded-full

                bg-neutral-100
                text-slate-700

                dark:bg-white/10
                dark:text-white/70
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ===== LINK ===== */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              pt-3 text-sm font-medium

              text-slate-900
              hover:underline

              dark:text-white
            "
          >
            Read More →
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default Project;
