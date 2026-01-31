"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ================= MAGNETIC LINK ================= */
function MagneticLink({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => (ref.current.style.transform = "translate(0,0)")}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

/* ================= NAVBAR ================= */
export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Publications", id: "publications" },
    { name: "Training", id: "training" },
    { name: "Gallery", id: "gallery" },
  ];

  /* ===== ACTIVE SECTION OBSERVER ===== */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      {/* Glow synced with lamp */}
      <motion.div
        className="absolute -z-10 w-[70%] h-16 rounded-full blur-2xl"
        animate={{
          opacity: [0.2, 0.45, 0.2],
          backgroundColor: [
            "rgba(34,211,238,0.35)",
            "rgba(168,85,247,0.45)",
            "rgba(34,211,238,0.35)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <nav className="flex items-center w-full max-w-6xl justify-between
                      border border-slate-700 bg-black/50 backdrop-blur-md
                      px-6 py-3 rounded-full text-white text-sm">

        {/* LOGO */}
        <a href="#hero" className="font-semibold tracking-wide">
          Shoabul
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <MagneticLink key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative overflow-hidden h-6 group transition
                  ${active === item.id ? "text-aqua" : "text-white/80"}`}
              >
                <span className="block group-hover:-translate-y-full transition-transform duration-300">
                  {item.name}
                </span>
                <span className="block absolute top-full left-0
                                 group-hover:translate-y-[-100%]
                                 transition-transform duration-300">
                  {item.name}
                </span>

                {/* Active underline */}
                {active === item.id && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px]
                               bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                )}
              </a>
            </MagneticLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="border border-slate-600 px-4 py-2 rounded-full
                       hover:bg-slate-800 transition"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="bg-white text-black px-4 py-2 rounded-full font-medium
                       shadow-[0_0_25px_6px_rgba(255,255,255,0.35)]
                       hover:shadow-[0_0_35px_10px_rgba(255,255,255,0.55)]
                       transition"
          >
            Explore
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-24 inset-x-4 bg-black/90 border border-slate-700
                        rounded-2xl py-6 flex flex-col items-center gap-4
                        text-white backdrop-blur-md md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`transition ${
                active === item.id ? "text-aqua" : "text-white/80"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
