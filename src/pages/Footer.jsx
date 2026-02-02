import { useState } from "react";
import ContactModal from "../components/ContactModal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/880XXXXXXXXXX",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",
      highlight: true,
    },
  ];

  const navigation = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" },
    { name: "Education", link: "/education" },
    { name: "Publications", link: "/publications" },
    { name: "Training", link: "/training" },
    { name: "Gallery", link: "/gallery" },
  ];

  return (
    <>
      <footer
        className="
          relative z-50 isolate
          bg-[#27282b]
          text-slate-300
          py-14 px-6
        "
      >
        <div className="max-w-6xl mx-auto">

          {/* ================= TOP SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ===== ABOUT / CONTACT ===== */}
            <div>
              <h4 className="text-white font-medium text-lg">
                Syed Shoabul Islam
              </h4>

              <p className="text-sm mt-4 leading-relaxed max-w-md text-slate-400">
                GIS Analyst | Urban Planner
              </p>

              <div className="mt-10 space-y-4 space-x-10">

                <div className="inline-flex items-center gap-3 text-sm text-white hover:text-slate-200 transition">
                  <span className="h-9 w-9 rounded-full bg-[#343538] flex items-center justify-center">
                    🏠
                  </span>
                  Aftab Nagar, Dhaka
                </div>

                <div className="inline-flex items-center gap-3 text-sm text-white hover:text-slate-200 transition">
                  <span className="h-9 w-9 rounded-full bg-[#343538] flex items-center justify-center">
                    ✉️
                  </span>
                  sajidgmhs73@gmail.com
                </div>
              </div>
            </div>

            {/* ===== NAVIGATION + SOCIAL ===== */}
            <div>
              <h4 className="text-white font-medium text-lg">
                Navigation
              </h4>

              <ul className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* SOCIAL ICONS */}
              <ul className="flex items-center gap-4 mt-10">
                {socials.map((item) => (
                  <li
                    key={item.name}
                    className={`
                      h-10 w-10 rounded-full
                      flex items-center justify-center
                      transition hover:scale-110
                      ${item.highlight ? "bg-[#25D366]" : "bg-[#343538]"}
                    `}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5 invert"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="border-t border-slate-600/50 mt-14 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

              <p className="text-slate-400">
                © {new Date().getFullYear()} Syed Shoabul Islam. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {isOpen && <ContactModal close={() => setIsOpen(false)} />}
    </>
  );
}
