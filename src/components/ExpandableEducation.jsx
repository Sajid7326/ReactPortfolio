import { useState, useId, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= MAGNETIC HOVER ================= */
function Magnetic({ children }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (window.innerWidth < 768 || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function ExpandableEducation() {
  const id = useId();
  const [active, setActive] = useState(null);

  const items = [
    {
      title: "Bachelor of Urban & Regional Planning (BURP)",
      institution: "Chittagong University of Engineering & Technology (CUET)",
      institutionUrl: "https://cuet.ac.bd/",
      period: "2020 – 2025",
      description: "CGPA: 3.39 / 4.00",
      logo: "/images/cuet.png",
      link: "https://drive.google.com/file/d/14e2HlXNNSDYKlhfxdO6tuDxbGmsMW-0c/view?usp=sharing",
      details: [
        "Undergraduate Thesis: Geospatial Assessment of Waterlogging Risk in Chattogram City using Composite Index Modelling",
      ],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Hazi Muhammad Mohsin College, Chattogram",
      institutionUrl: "https://www.mohsincollege.edu.bd/",
      period: "2017 – 2019",
      description: "GPA: 4.83 / 5.00",
      logo: "/images/mohsin.png",
      details: ["Group: Science"],
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Govt. Muslim High School, Chattogram",
      institutionUrl: "https://gmhs.ctgcity.gov.bd/",
      period: "2013 – 2017",
      description: "GPA: 5.00 / 5.00",
      logo: "/images/muslim.png",
      details: ["Group: Science"],
    },
    {
      title: "Junior School Certificate (JSC)",
      institution: "PH Amin Academy, Chattogram",
      institutionUrl: "https://phameenacademy.edu.bd/",
      period: "2012 - 2015",
      description: "GPA: 5.00 / 5.00",
      logo: "/images/phamin.jpg",
      details: ["General Curriculum"],
    },
  ];

  /* ESC + scroll auto close */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setActive(null);
    const scroll = () => setActive(null);

    window.addEventListener("keydown", esc);
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("keydown", esc);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-md flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`edu-${active.title}-${id}`}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full max-w-[600px]
                rounded-2xl p-5 sm:p-6 space-y-4
                bg-white dark:bg-neutral-900
                text-slate-900 dark:text-white
                border border-slate-200 dark:border-white/10
                shadow-2xl
              "
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src={active.logo}
                  alt={active.institution}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {active.title}
                  </h3>
                  <a
                    href={active.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm text-cyan-500 underline"
                  >
                    {active.institution}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-neutral-400">
                    {active.period}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-neutral-300">
                {active.description}
              </p>

              <ul className="list-disc list-inside text-sm text-slate-700 dark:text-neutral-300 space-y-1">
                {active.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {active.link && (
                <a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 px-4 py-2 rounded-md bg-cyan-400 text-black text-sm font-semibold"
                >
                  View File →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= LIST ================= */}
      <div className="max-w-3xl mx-auto space-y-6 px-4">
        {items.map((e, i) => (
          <motion.div
            key={i}
            layoutId={`edu-${e.title}-${id}`}
            onClick={() => setActive(e)}
            className="
              group cursor-pointer flex items-center gap-4 sm:gap-6
              p-4 sm:p-6 rounded-xl
              bg-slate-50 dark:bg-white/5
              border border-slate-200 dark:border-white/10
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              transition-all
            "
          >
            {/* Logo */}
            <Magnetic>
              <div
                className="
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-full bg-slate-100 dark:bg-white/10
                  border border-slate-200 dark:border-white/20
                  flex items-center justify-center
                "
              >
                <div
                  className="
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full bg-white dark:bg-neutral-200
                    flex items-center justify-center
                  "
                >
                  <img
                    src={e.logo}
                    alt={e.institution}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
              </div>
            </Magnetic>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                {e.title}
              </h3>

              <a
                href={e.institutionUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(ev) => ev.stopPropagation()}
                className="text-xs text-cyan-500 underline"
              >
                {e.institution}
              </a>

              <p className="text-xs text-slate-500 dark:text-neutral-400">
                {e.period}
              </p>

              <p className="text-sm text-slate-700 dark:text-neutral-300 mt-1">
                {e.description}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={(ev) => {
                ev.stopPropagation();
                setActive(e);
              }}
              className="
                px-3 sm:px-4 py-2
                rounded-full bg-cyan-400 text-black
                text-xs font-medium
                hover:scale-105 transition
              "
            >
              Details
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
}