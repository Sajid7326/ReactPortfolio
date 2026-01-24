import { useState } from "react";
import { mySocials } from "../constants";
import ContactModal from "../components/ContactModal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">

          <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

            {/* BRAND / ABOUT */}
            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-white text-xl font-semibold tracking-wide">
                Syed Shoabul Islam
              </h2>
              <p className="text-white/50 text-sm mt-2">
                GIS Analyst | Urban Planner
              </p>

              <div className="w-full max-w-52 h-px mt-6 bg-gradient-to-r from-black via-white/25 to-black"></div>

              <p className="text-sm text-white/60 mt-6 max-w-sm leading-relaxed">
                Passionate about geospatial analytics, spatial decision making,
                and transforming urban data into meaningful insights.
              </p>

              <button
                onClick={() => setIsOpen(true)}
                className="mt-4 px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-300 transition"
              >
                Contact Me
              </button>
            </div>

            {/* NAVIGATION */}
            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">Navigation</h3>
              <div className="flex flex-col gap-2 mt-6">
                {[
                  { name: "About", link: "#about" },
                  { name: "Projects", link: "#projects" },
                  { name: "Experience", link: "#experience" },
                  { name: "Publications", link: "#publications" },
                  { name: "Training", link: "#training" },
                ].map((item, i) => (
                  <a key={i} href={item.link} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">Social</h3>
              <div className="flex flex-col gap-2 mt-6">
                {mySocials?.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px mt-16 mb-4 bg-gradient-to-r from-black via-white/25 to-black"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Syed Shoabul Islam
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <div className="w-px h-4 bg-white/20"></div>
              <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {isOpen && <ContactModal close={() => setIsOpen(false)} />}
    </>
  );
}
