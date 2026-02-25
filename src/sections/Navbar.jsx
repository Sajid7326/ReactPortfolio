"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState } from "react";

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

          <NavItems items={navItems} />

        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <span className="font-semibold text-white">
                Shoabul
              </span>
            </NavbarLogo>

            <MobileNavToggle
              isOpen={open}
              onClick={() => setOpen(!open)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-white py-5 text-lg"
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
