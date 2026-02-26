"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState, useEffect, useRef } from "react";

export default function PortfolioNavbar() {
  const navItems = [
    { name: "About Me", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Publications", link: "#publications" },
    { name: "Training", link: "#training" },
    { name: "Gallery", link: "#gallery" },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const containerRef = useRef(null);
  const underlineRef = useRef(null);
  const itemRefs = useRef({});

  // ===== Scroll Spy =====
  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.link))
      .filter(Boolean);

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      let current = navItems[0].link;
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ===== Move underline smoothly =====
  useEffect(() => {
    const el = itemRefs.current[active];
    const underline = underlineRef.current;
    const container = containerRef.current;

    if (el && underline && container) {
      const elRect = el.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();

      underline.style.width = `${elRect.width}px`;
      underline.style.transform = `translateX(${elRect.left - parentRect.left}px)`;
    }
  }, [active]);

  // ===== Magnetic hover effect =====
  const onMouseMove = (e, key) => {
    const el = itemRefs.current[key];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const onMouseLeave = (key) => {
    const el = itemRefs.current[key];
    if (!el) return;
    el.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div className="relative w-full z-50">
      <Navbar>
        {/* Desktop */}
        <NavBody>
          <NavbarLogo>
            <span className="font-semibold text-white">
              Syed Shoabul Islam
            </span>
          </NavbarLogo>

          {/* Nav Items */}
          <div
            ref={containerRef}
            className="relative flex items-center gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                ref={(el) => (itemRefs.current[item.link] = el)}
                onMouseMove={(e) => onMouseMove(e, item.link)}
                onMouseLeave={() => onMouseLeave(item.link)}
                className={`
                  relative px-2 py-1 text-sm font-medium transition-all duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  ${
                    active === item.link
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {item.name}
              </a>
            ))}

            {/* Sliding Underline */}
            <span
              ref={underlineRef}
              className="
                absolute -bottom-1 left-0 h-[2px] bg-cyan-400
                transition-transform duration-300 ease-out
              "
              style={{ width: 0, transform: "translateX(0px)" }}
            />
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <span className="font-semibold text-white">Shoabul</span>
            </NavbarLogo>

            <MobileNavToggle
              isOpen={open}
              onClick={() => setOpen(!open)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setOpen(false)}
                className={`
                  py-4 text-lg transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  ${
                    active === item.link
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-300"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}