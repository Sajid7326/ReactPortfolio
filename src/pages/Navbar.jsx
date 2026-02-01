import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import LiquidIconNav from "./LiquidIconNav";

const navItems = [
  { name: "About", link: "/about", icon: "/icons/about.png" },
  { name: "Projects", link: "/projects", icon: "/icons/projects.png" },
  { name: "Experience", link: "/experience", icon: "/icons/experience.png" },
  { name: "Education", link: "/education", icon: "/icons/education.png" },
  { name: "Publications", link: "/publications", icon: "/icons/publications.png" },
  { name: "Training", link: "/training", icon: "/icons/training.png" },
  { name: "Gallery", link: "/gallery", icon: "/icons/gallery.png" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP LIQUID NAV ================= */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-3">
        <LiquidIconNav items={navItems} />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="
            h-10 w-10 rounded-full
            flex items-center justify-center
            bg-white/90 dark:bg-black/70
            border border-neutral-200 dark:border-white/10
            text-black dark:text-white
            backdrop-blur
            hover:scale-105 transition
          "
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div className="fixed top-3 right-3 z-50 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="
            h-10 w-10 rounded-full
            bg-white/90 dark:bg-black/80
            border border-neutral-200 dark:border-white/10
            text-black dark:text-white
          "
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-black flex flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.link);
                setOpen(false);
              }}
              className="text-xl text-black dark:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
