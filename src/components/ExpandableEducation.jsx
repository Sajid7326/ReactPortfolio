import { useState, useId, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= MAGNETIC HOVER ================= */
function Magnetic({ children }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (window.innerWidth < 768) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      }}
      onMouseLeave={() => {
        ref.current.style.transform = "translate(0px, 0px)";
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
      link: "https://drive.google.com/file/d/1xS_zfmxrQdRDjUyNXiiZcATYOm4rrGVC/view",
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
      {/* ================= EXPANDED MODAL ================= */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-md flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`edu-${active.title}-${id}`}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-neutral-900 text-white rounded-2xl w-full
                max-w-[92%] sm:max-w-[560px]
                p-5 sm:p-6 space-y-4
                shadow-[0_0_40px_rgba(122,87,219,0.35)]
              "
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
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
                    className="text-xs sm:text-sm text-aqua underline"
                  >
                    {active.institution}
                  </a>
                  <p className="text-xs text-neutral-400">{active.period}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300">
                {active.description}
              </p>

              <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-300 space-y-1">
                {active.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {active.link && (
                <a
                  href={active.link}
                  target="_blank"
                  className="inline-block mt-2 px-4 sm:px-5 py-2 rounded-md bg-white text-black text-xs font-semibold"
                >
                  View Thesis →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= TIMELINE LIST ================= */}
      <div className="relative max-w-6xl mx-auto mt-8 sm:mt-10 space-y-4 sm:space-y-6 px-4">
        {items.map((e, i) => (
          <motion.div
            key={i}
            layoutId={`edu-${e.title}-${id}`}
            onClick={() => setActive(e)}
            className="
              group cursor-pointer flex items-start gap-4 sm:gap-6
              p-4 sm:p-6
              rounded-xl
              bg-white/10 border border-white/10
              hover:border-lavender
              hover:shadow-[0_0_25px_rgba(122,87,219,0.35)]
              transition-all
            "
          >
            {/* Logo */}
            <Magnetic>
              <div
                className="
                  w-16 h-16 sm:w-20 sm:h-20
                  rounded-full bg-white/10 backdrop-blur-md
                  border border-white/20 shadow-inner
                  flex items-center justify-center
                "
              >
                <div
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-full bg-white
                    flex items-center justify-center
                  "
                >
                  <img
                    src={e.logo}
                    alt={e.institution}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
              </div>
            </Magnetic>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xs sm:text-sm font-semibold">{e.title}</h3>

              <a
                href={e.institutionUrl}
                target="_blank"
                onClick={(ev) => ev.stopPropagation()}
                className="text-[11px] sm:text-xs text-aqua underline"
              >
                {e.institution}
              </a>

              <p className="text-[10px] sm:text-xs text-neutral-400">
                {e.period}
              </p>
              <p className="text-[11px] sm:text-xs text-neutral-300 mt-2">
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
                px-3 sm:px-4 py-2 sm:py-3
                rounded-full bg-white text-black
                text-[10px] sm:text-xs font-medium
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
