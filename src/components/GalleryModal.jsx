import { motion, AnimatePresence } from "motion/react";

export default function GalleryModal({ image, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed inset-0 z-[999]
          bg-black/70 backdrop-blur-md
          flex items-center justify-center px-4
          overflow-y-auto
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="
            w-full max-w-4xl
            rounded-2xl
            bg-white dark:bg-neutral-900
            border border-slate-200 dark:border-white/10
            p-4
            shadow-2xl
          "
        >
          <img
            src={image}
            alt="Gallery Preview"
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}