import React from "react";
import { BackgroundBeams } from "../components/background-beams";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

const trainings = [
  {
    title: "Remote Sensing & Photogrammetry",
    issuer: "Bangladesh Computer Council",
    logo: "/logos/bcc.png",
    certificate: "/certs/bcc.pdf",
    details: [
      "80-hour professional training",
      "Satellite image classification",
      "Google Earth Engine",
      "Risk assessment modules",
      "Photogrammetry exercises",
      "Image Classification"
    ],
  },
  {
    title: "Aspire Leaders Program 2025",
    issuer: "Aspire Institute",
    logo: "/logos/aspire.png",
    certificate: "/certs/aspire.pdf",
    details: ["Ethical leadership", "Strategic thinking", "Public speaking", "Cross-cultural collaboration"],
  },
  {
    title: "Visioning Scenario Development",
    issuer: "Tomorrow’s Cities",
    logo: "/logos/tc.png",
    certificate: "/certs/tc-visioning.pdf",
    details: ["Scenario planning for risk assessment", "Urban exposure modeling", "Chattogram & Cox’s Bazar research"],
  },
  {
    title: "Risk Agreement",
    issuer: "Tomorrow’s Cities",
    logo: "/logos/tc.png",
    certificate: "/certs/tc-risk.pdf",
    details: ["Multi-hazard urban risk", "Decision-support frameworks", "Urban resilience training"],
  },
];

export const Training = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-28 overflow-hidden">
      {/* Background beams */}
      <div className="absolute inset-0 -z-10 opacity-60 mix-blend-screen pointer-events-none">
        <BackgroundBeams />
      </div>

      <h2 className="text-4xl font-bold text-white mb-12 tracking-wide">
        Training
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-6xl">
        {trainings.map((t, i) => (
          <TrainingCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

const TrainingCard = ({
  title,
  issuer,
  logo,
  details,
  certificate
}) => {
  return (
    <CardContainer className="w-[290px]">
<CardBody
  className="
    bg-[#FBEFEF] 
    border border-black/10 
    rounded-xl p-4 shadow-md
    flex flex-col justify-between
    h-[320px]
    text-black               /* force black text */
  "
        >


        {/* Top block */}
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <p className="font-semibold text-[14px]">{title}</p>
            {logo && (
              <img
                src={logo}
                alt={issuer}
                className="w-10 h-10 object-contain opacity-90"
              />
            )}
          </div>

          {/* Issuer badge */}
          <span
            className="
              inline-block text-[10px] px-2 py-[2px]
              rounded-md bg-black/90 text-white
            "
          >
            {issuer}
          </span>

          {/* Bullet list */}
          <ul className="text-xs space-y-1 list-disc list-inside opacity-80">
            {details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>

        {/* Bottom pinned button */}
        <CardItem translateZ={20} className="w-full">
          <a
            href={certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full block text-center
              py-1.5 rounded-md text-xs font-semibold
              bg-black text-white hover:bg-neutral-800
              transition shadow 
            "
          >
            View Certificate →
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

