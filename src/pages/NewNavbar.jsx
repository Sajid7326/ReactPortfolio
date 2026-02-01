import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";

/* 🔁 ROUTE-BASED NAV ITEMS */
const navItems = [
  { name: "About Me", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/experience" },
  { name: "Education", link: "/education" },
  { name: "Publications", link: "/publications" },
  { name: "Training", link: "/training" },
  { name: "Gallery", link: "/gallery" },
];

export default function NewNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const goHome = () => {
    navigate("/about");
    setOpen(false);
  };

  return (
    <Navbar
      className="
        bg-[#f8f9fb] text-black
        dark:bg-black/60 dark:text-white
        border-b border-neutral-200 dark:border-white/10
        backdrop-blur-md
        transition-colors duration-300
      "
    >
      {/* ================= DESKTOP NAV ================= */}
      <NavBody>
        <NavbarLogo
          onClick={goHome}
          className="text-black dark:text-white"
        />

        <div className="flex items-center gap-4">
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              onClick: () => navigate(item.link),
              className: `
                text-black dark:text-white
                hover:text-neutral-600 dark:hover:text-cyan-300
                transition-colors
              `,
            }))}
          />

          {/* 🌗 THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              ml-2 px-3 py-1 rounded-full text-sm
              border border-neutral-300 dark:border-white/10
              text-black dark:text-white
              hover:bg-neutral-200 dark:hover:bg-white/10
              transition
            "
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </NavBody>

      {/* ================= MOBILE NAV ================= */}
      <MobileNav>
        <MobileNavHeader
          className="
            bg-[#f8f9fb] dark:bg-black
            border-b border-neutral-200 dark:border-white/10
          "
        >
          <NavbarLogo
            onClick={goHome}
            className="text-black dark:text-white"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="px-2 text-lg text-black dark:text-white"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={open}
          className="
            bg-[#f8f9fb] dark:bg-black
            border-t border-neutral-200 dark:border-white/10
          "
        >
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                navigate(item.link);
                setOpen(false);
              }}
              className="
                pl-3 py-2 text-left
                text-black dark:text-white
                hover:bg-neutral-200 dark:hover:bg-white/10
                transition
              "
            >
              {item.name}
            </button>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
