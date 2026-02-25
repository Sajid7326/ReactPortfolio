import { useState, useEffect } from "react";
import ContactModal from "../components/ContactModal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [hiddenByModal, setHiddenByModal] = useState(false);

  // Watch for modal-open class on body
  useEffect(() => {
    const checkModal = () => {
      setHiddenByModal(document.body.classList.contains("modal-open"));
    };

    checkModal();

    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1MBPSp3xVm/",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/syedshoabulislam",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shoabul.islam?igsh=MTlmemNnZ3V1ejN6Ng==",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801312306839",
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
        className={`
          relative isolate z-50
          bg-black dark:bg-[#EAEFEF]
          text-slate-300 dark:text-slate-800
          py-14 px-6
          transition-all duration-300 ease-out
          ${hiddenByModal ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100 translate-y-0"}
        `}
      >
        <div className="max-w-6xl mx-auto">

          {/* ================= TOP SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ===== ABOUT ===== */}
            <div>
              <h4 className="text-white dark:text-black text-bold font-medium text-lg">
                Syed Shoabul Islam
              </h4>

              <p className="text-sm mt-4 leading-relaxed max-w-md text-slate-400 dark:text-slate-700">
                GIS Analyst | Urban Planner
              </p>

              <div className="mt-10 space-y-4">

                <div className="inline-flex items-center gap-3 text-sm text-slate-200 dark:text-slate-800">
                  <span className="h-9 w-9 rounded-full bg-neutral-800 dark:bg-black/10 flex items-center justify-center">
                    🏠
                  </span>
                  Aftab Nagar, Dhaka
                </div>

                <div className="inline-flex items-center gap-3 px-8 text-sm text-slate-200 dark:text-slate-800">
                  <span className="h-9 w-9 rounded-full bg-neutral-800 dark:bg-black/10 flex items-center justify-center">
                    ✉️
                  </span>
                  sajidgmhs73@gmail.com
                </div>
              </div>
            </div>

            {/* ===== NAVIGATION + SOCIAL ===== */}
            <div>
              <h4 className="text-white dark:text-black font-medium text-lg">
                Navigation
              </h4>

              <ul className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="
                        text-slate-400 hover:text-white
                        dark:text-slate-700 dark:hover:text-black
                        transition
                      "
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
                      ${
                        item.highlight
                          ? "bg-[#25D366]"
                          : "bg-neutral-800 dark:bg-black/10"
                      }
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
                        className="w-5 h-5 dark:invert-0 invert"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="border-t border-neutral-800 dark:border-black/20 mt-14 pt-6">
            <p className="text-sm text-slate-500 dark:text-slate-700 text-center md:text-left">
              © {new Date().getFullYear()} Syed Shoabul Islam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {isOpen && <ContactModal close={() => setIsOpen(false)} />}
    </>
  );
}