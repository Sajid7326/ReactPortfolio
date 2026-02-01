import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LiquidIconNav({ items, variant = "desktop" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = variant === "mobile";

  // Sizes
  const baseSize = isMobile ? 40 : 48;

  return (
    <div
      className={`
        flex items-center
        ${isMobile ? "gap-1 px-3 py-2" : "gap-10 px-3 py-2"}
        rounded-full
        bg-white/90 dark:bg-black/70
        backdrop-blur-xl
        border border-neutral-200 dark:border-white/10
        shadow-lg
      `}
    >
      {items.map((item) => {
        const active = location.pathname === item.link;

        return (
          <motion.button
            key={item.name}
            onClick={() => navigate(item.link)}
            initial={false}
            animate={{ scale: active ? 1.15 : 1 }}
            whileHover={{ scale: 1.25 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
            }}
            className={`
              group relative
              flex items-center justify-center
              rounded-full
              ${active
                ? "bg-neutral-200/70 dark:bg-white/10"
                : "hover:bg-neutral-200/60 dark:hover:bg-white/10"}
            `}
            style={{
              width: baseSize,
              height: baseSize,
            }}
          >
            {/* Active glow */}
            {active && (
              <span
                className="
                  absolute inset-1 rounded-full
                  ring-2 ring-cyan-800/40
                  dark:ring-cyan-100/40
                  blur-[1px]
                "
              />
            )}

            {/* Icon */}
            <img
              src={item.icon}
              alt={item.name}
              className="w-6 h-6 shrink-0 relative z-10"
            />

            {/* Label – ONLY on hover */}
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="
                pointer-events-none
                absolute -bottom-6
                text-[11px] font-medium
                whitespace-nowrap
                text-black dark:text-white
              "
            >
              {item.name}
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
}
