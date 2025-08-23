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
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30} radius={120}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={80} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
