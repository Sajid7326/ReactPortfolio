"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

/* 🔁 ROUTE-BASED NAV ITEMS */
const navItems = [
  { name: "About Me", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/experience" },
  { name: "Education", link: "/education" },
  { name: "Publications", link: "/publications" },
  { name: "Training", link: "/training" },
  { name: "Gallery", link: "/gallery" },
];

export default function NewNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  /* 🔁 Logo click → Home page */
  const goHome = () => {
    navigate("/");
    setOpen(false);
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo onClick={goHome} />

        {/* Desktop Nav */}
        <NavItems
          items={navItems.map((item) => ({
            ...item,
            onClick: () => navigate(item.link),
          }))}
        />
      </NavBody>

      {/* Mobile Nav */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo onClick={goHome} />
          <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={open}>
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                navigate(item.link);
                setOpen(false);
              }}
              className="pl-2 py-1 border-l border-white/10 text-left"
            >
              {item.name}
            </button>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
