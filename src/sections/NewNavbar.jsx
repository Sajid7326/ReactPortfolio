"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { twMerge } from "tailwind-merge";

const NewNavbar = () => {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full flex items-center justify-center">
      <div
        className={twMerge(
          "fixed top-2 inset-x-0 max-w-8xl mx-auto z-50"
        )}
      >
        <div className="flex items-center justify-between px-3 py-2 bg-black/50 backdrop-blur-md rounded-2xl shadow-lg">
          {/* ---- Left Side: Your Name ---- */}
          <a
            href="#"
            className="text-base font-bold text-neutral-300 hover:text-white transition-colors"
          >
            Syed Shoabul Islam
          </a>

          {/* ---- Right Side: Menu (desktop) ---- */}
               <div className="hidden md:flex space-x-6 text-neutral-300">
  <a 
    href="#about" 
    onClick={() => setActive(null)} 
    className="hover:text-white transition-colors"
  >
    About Me
  </a>
  <a 
    href="#projects" 
    onClick={() => setActive(null)} 
    className="hover:text-white transition-colors"
  >
    Projects
  </a>
  <a 
    href="#experience" 
    onClick={() => setActive(null)} 
    className="hover:text-white transition-colors"
  >
    Experience
  </a>
  <a 
    href="#education" 
    onClick={() => setActive(null)} 
    className="hover:text-white transition-colors"
  >
    Education
  </a>
  <a 
    href="#publications" 
    onClick={() => setActive(null)} 
    className="hover:text-white transition-colors"
  >
    Publications
  </a>
  <a 
    href="#contact" 
    onClick={() => setActive(null)} 
    className="hover:text-white transition-colors"
  >
    Contact
  </a>
</div>

          {/* ---- Toggle Button (mobile) ---- */}
          <button
            className="md:hidden p-2 text-neutral-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="menu toggle"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* ---- Mobile Menu Overlay ---- */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 text-lg text-neutral-200">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white">About Me</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white">Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-white">Experience</a>
          <a href="#education" onClick={() => setIsOpen(false)} className="hover:text-white">Education</a>
          <a href="#publications" onClick={() => setIsOpen(false)} className="hover:text-white">Publications</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white">Contact</a>
        </div>
      )}
    </div>
  );
};

export const NavbarDemo = NewNavbar;
export default NewNavbar;
