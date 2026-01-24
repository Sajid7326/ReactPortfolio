import { mySocials } from "../constants";
import { Particles } from "../components/Particles";

const Footer = () => {
  return (
    <footer className="relative w-full px-8 py-12 text-neutral-300 bg-transparent overflow-hidden">

      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={80}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Top Light Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

      <div className="flex flex-col sm:flex-row sm:justify-between gap-10">

        {/* Brand + Description */}
        <div className="space-y-2 max-w-xs">
          <h2 className="text-lg font-semibold text-white">
            Syed Shoabul Islam
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            GIS Analyst & Urban Planner — Making sense of the world through maps and spatial data.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Social
          </h3>
          <div className="flex gap-4">
            {mySocials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={social.icon} className="w-6 h-6" alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6" />

      {/* Footer Bottom */}
      <div className="text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© 2026 Syed Shoabul Islam. All rights reserved.</p>

        <div className="flex gap-3">
          <a href="#" className="hover:text-neutral-300 transition">Terms</a>
          <span>|</span>
          <a href="#" className="hover:text-neutral-300 transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
