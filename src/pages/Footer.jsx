import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import { MapPin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [hiddenByModal, setHiddenByModal] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

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

  // Show "back to top" button on scroll
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1MBPSp3xVm/",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg",
      glow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.8)]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/syedshoabulislam",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
      glow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.8)]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shoabul.islam?igsh=MTlmemNnZ3V1ejN6Ng==",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",
      glow: "hover:shadow-[0_0_20px_rgba(225,48,108,0.8)]",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801312306839",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg",
      highlight: true,
      glow: "hover:shadow-[0_0_20px_rgba(37,211,102,0.9)]",
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
          py-10 sm:py-14 px-4 sm:px-6
          transition-all duration-300 ease-out
          ${hiddenByModal ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100 translate-y-0"}
        `}
      >
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

            {/* ===== ABOUT ===== */}
            <div>
              <h4 className="text-white dark:text-black font-medium text-base sm:text-lg">
                Syed Shoabul Islam
              </h4>

              <p className="text-xs sm:text-sm mt-3 text-slate-400 dark:text-slate-700">
                GIS Analyst | Urban Planner
              </p>

              <div className="mt-6 sm:mt-10 space-y-4">

                {/* Address */}
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <span className="h-9 w-9 rounded-full bg-neutral-800 dark:bg-black/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white dark:text-black" />
                  </span>
                  <span>Aftab Nagar, Dhaka</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <span className="h-9 w-9 rounded-full bg-neutral-800 dark:bg-black/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white dark:text-black" />
                  </span>
                  <a
                    href="mailto:sajidgmhs73@gmail.com"
                    className="break-all hover:text-white dark:hover:text-black transition"
                  >
                    sajidgmhs73@gmail.com
                  </a>
                </div>

              </div>
            </div>

            {/* ===== NAVIGATION + SOCIAL ===== */}
            <div>
              <h4 className="text-white dark:text-black font-medium text-base sm:text-lg">
                Navigation
              </h4>

              <ul className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.link;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.link}
                        className={`
                          inline-block px-3 py-1.5 rounded-lg transition
                          ${
                            isActive
                              ? "bg-cyan-500/20 text-cyan-400 dark:bg-cyan-500/30 dark:text-cyan-700"
                              : "text-slate-400 hover:text-white hover:bg-white/5 dark:text-slate-700 dark:hover:text-black dark:hover:bg-black/5"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* SOCIAL ICONS */}
              <ul className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-10">
                {socials.map((item) => (
                  <li
                    key={item.name}
                    className={`
                      h-10 w-10 rounded-full
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-110
                      ${item.glow}
                      ${
                        item.highlight
                          ? "bg-[#25D366]"
                          : "bg-neutral-800 dark:bg-black/10"
                      }
                    `}
                  >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <img src={item.icon} alt={item.name} className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 dark:border-black/20 mt-10 sm:mt-14 pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-700">
              © {new Date().getFullYear()} Syed Shoabul Islam. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-[999]
            h-11 w-11 rounded-full
            bg-cyan-500 text-black
            flex items-center justify-center
            shadow-lg
            hover:shadow-[0_0_25px_rgba(34,211,238,0.9)]
            hover:scale-110
            transition-all
          "
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {isOpen && <ContactModal close={() => setIsOpen(false)} />}
    </>
  );
}