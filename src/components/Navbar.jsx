import { useTheme } from "../context/ThemeContext";
import LiquidIconNav from "./LiquidIconNav";

const navItems = [
  { name: "About", link: "/about", icon: "/icons/user.svg" },
  { name: "Projects", link: "/projects", icon: "/icons/layers.svg" },
  { name: "Experience", link: "/experience", icon: "/icons/briefcase.svg" },
  { name: "Education", link: "/education", icon: "/icons/graduation-cap.svg" },
  { name: "Publications", link: "/publications", icon: "/icons/file-text.svg" },
  { name: "Training", link: "/training", icon: "/icons/activity.svg" },
  { name: "Gallery", link: "/gallery", icon: "/icons/image.svg" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          z-[999]
          hidden md:flex items-center gap-3
        "
      >
        <LiquidIconNav
          items={navItems}
          variant="desktop"
        />

        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div
        className="
          fixed top-5 left-1/2 -translate-x-1/2
          z-[99]
          flex md:hidden items-center gap-2
          max-w-2xl px-15
        "
      >
        <LiquidIconNav
          items={navItems}
          variant="mobile"
        />

        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

/* ===== Theme Button (shared) ===== */
function ThemeButton({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        h-10 w-10 rounded-full
        flex items-center justify-center
        bg-white/90 dark:bg-black/80
        backdrop-blur-xl
        border border-neutral-200 dark:border-white/10
        text-black dark:text-white
        shadow-lg
        hover:scale-105 transition
      "
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
