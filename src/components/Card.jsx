import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  const baseProps = {
    style,
    drag: true,
    dragConstraints: containerRef,
    dragElastic: 1,
    whileHover: { scale: 1.20 },
    className:
      "absolute z-40 cursor-grab pointer-events-auto select-none",
  };

  return image && !text ? (
    <motion.img
      {...baseProps}
      src={image}
      className={`${baseProps.className} w-14`}
      draggable={false}
    />
  ) : (
    <motion.div
      {...baseProps}
      className={`${baseProps.className}
        px-4 py-2 text-sm md:text-base
        rounded-full ring ring-gray-700
        bg-storm text-white/90
        backdrop-blur-sm`}
    >
      {text}
    </motion.div>
  );
};

export default Card;
