import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <ul className="flex space-x-4">
      <li>
        <a className="nav-link text-neutral-400 hover:text-white" href="#about">
          About Me
        </a>
      </li>
      <li>
        <a className="nav-link text-neutral-400 hover:text-white" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="nav-link text-neutral-400 hover:text-white" href="#experience">
          Experience
        </a>
      </li>
      <li>
        <a className="nav-link text-neutral-400 hover:text-white" href="#education">
          Education
        </a>
      </li>
      <li>
        <a className="nav-link text-neutral-400 hover:text-white" href="#publications">
          Publications
        </a>
      </li>
      <li>
        <a className="nav-link text-neutral-400 hover:text-white" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // trigger blur when scrolled down
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-9999 w-full transition-colors duration-500 ${
        scrolled ? "backdrop-blur-lg bg-black/50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl inset-x-0">
        <div className="flex items-center justify-between py-2 sm:py-0 z-50">
          <a
            href="#"
            className="ml-10 text-2xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Syed Shoabul Islam
          </a>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
            {isOpen && (
              <motion.nav
                className="block overflow-hidden text-center sm:hidden"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ maxHeight: "100vh" }}
                transition={{ duration: 1 }}
              >
                <nav className="pb-5">
                  <Navigation />
                </nav>
              </motion.nav>
            )}
          </div>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
