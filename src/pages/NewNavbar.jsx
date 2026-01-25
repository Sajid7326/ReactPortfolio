"use client";
import { useState } from "react";
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

const navItems = [
  { name: "About Me", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Publications", link: "#publications" },
  { name: "Training", link: "#training" },
  { name: "Gallery", link: "#gallery" },
];

export default function NewNavbar() {
  const [open, setOpen] = useState(false);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo onClick={scrollTop} />
        <NavItems items={navItems} />
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo onClick={scrollTop} />
          <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={open}>
          {navItems.map((i, idx) => (
            <a
              key={idx}
              href={i.link}
              onClick={() => setOpen(false)}
              className="pl-2 py-1 border-l border-white/10"
            >
              {i.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
