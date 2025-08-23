import { useEffect, useState } from "react";
import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "fragstats",
    "ibmspss",
    "cplusplus",
    "latex",
    "autocad",
    "python",
    "coreldraw",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "qgis",
    "tailwindcss",
    "vitejs",
    "arcgis",
    "gee",
  ];

  const [outerRadius, setOuterRadius] = useState(80);
  const [innerRadius, setInnerRadius] = useState(55);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // mobile
        setOuterRadius(55);
        setInnerRadius(40);
      } else if (window.innerWidth < 1024) {
        // tablet
        setOuterRadius(70);
        setInnerRadius(50);
      } else {
        // desktop
        setOuterRadius(90);
        setInnerRadius(60);
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={15} radius={outerRadius}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles iconSize={10} radius={innerRadius} reverse speed={2}>
        {skills
          .slice() // avoid mutating original array
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
