import { mySocials } from "../constants";
import { Particles } from "../components/Particles";

const Footer = () => {
  return (
    <footer className="relative w-full text-neutral-400 text-sm px-6 py-6 mt-10 overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Dark overlay so text is readable */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full relative z-10" />

      {/* Top divider line */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full relative z-10" />

      {/* Terms + Socials + Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Terms */}
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <span>|</span>
          <p>Privacy Policy</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.icon} className="w-5 h-5" alt={social.name} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center">
          © 2025 Syed Shoabul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
