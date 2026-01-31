import React from "react";
import { BackgroundBeams } from "../components/background-beams";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

/* =======================
   TRAINING DATA
======================= */
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
      "Image Classification",
    ],
  },
  {
    title: "Aspire Leaders Program 2025",
    issuer: "Aspire Institute",
    logo: "/logos/aspire.png",
    certificate: "/certs/aspire.pdf",
    details: [
      "Ethical leadership",
      "Strategic thinking",
      "Public speaking",
      "Cross-cultural collaboration",
    ],
  },
  {
    title: "Visioning Scenario Development",
    issuer: "Tomorrow’s Cities",
    logo: "/logos/tc.png",
    certificate: "/certs/tc-visioning.pdf",
    details: [
      "Scenario planning for risk assessment",
      "Urban exposure modeling",
      "Chattogram & Cox’s Bazar research",
    ],
  },
  {
    title: "Risk Agreement",
    issuer: "Tomorrow’s Cities",
    logo: "/logos/tc.png",
    certificate: "/certs/tc-risk.pdf",
    details: [
      "Multi-hazard urban risk",
      "Decision-support frameworks",
      "Urban resilience training",
    ],
  },
];

/* =======================
   PAGE COMPONENT
======================= */
const Training = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
        <BackgroundBeams />
      </div>

      {/* Page Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16 tracking-wide">
        Training
      </h2>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {trainings.map((training, index) => (
          <TrainingCard key={index} {...training} />
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 sm:hidden px-6 max-w-6xl mx-auto">
        {trainings.map((training, index) => (
          <TrainingCardMobile key={index} {...training} />
        ))}
      </div>
    </section>
  );
};

export default Training;

/* =======================
   DESKTOP CARD
======================= */
const TrainingCard = ({ title, issuer, logo, details, certificate }) => (
  <CardContainer className="w-[290px]">
    <CardBody className="bg-[#FBEFEF] border border-black/10 rounded-xl p-4 shadow-md flex flex-col justify-between h-[300px] text-black">
      {/* Top Content */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <p className="font-semibold text-sm">{title}</p>
          {logo && (
            <img
              src={logo}
              alt={issuer}
              className="w-8 h-8 object-contain opacity-90"
            />
          )}
        </div>

        {/* Issuer */}
        <span className="inline-block text-[10px] px-2 py-[2px] rounded-md bg-black text-white">
          {issuer}
        </span>

        {/* Details */}
        <ul className="text-xs space-y-1 list-disc list-inside opacity-80">
          {details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>

      {/* Certificate Button */}
      <CardItem translateZ={20} className="w-full">
        <a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-1.5 rounded-md text-xs font-semibold bg-black text-white hover:bg-neutral-800 transition"
        >
          View Certificate →
        </a>
      </CardItem>
    </CardBody>
  </CardContainer>
);

/* =======================
   MOBILE CARD
======================= */
const TrainingCardMobile = ({ title, issuer, logo, details, certificate }) => (
  <div className="bg-[#FBEFEF] border border-black/10 rounded-xl p-4 shadow-md text-black space-y-3">
    <div className="flex justify-between items-start">
      <p className="font-semibold text-sm">{title}</p>
      {logo && (
        <img src={logo} alt={issuer} className="w-8 h-8 object-contain" />
      )}
    </div>

    <span className="text-[10px] px-2 py-[2px] rounded-md bg-black text-white">
      {issuer}
    </span>

    <ul className="text-xs space-y-1 opacity-80 list-disc list-inside">
      {details.map((detail, i) => (
        <li key={i}>{detail}</li>
      ))}
    </ul>

    <a
      href={certificate}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center py-1.5 rounded-md text-xs font-semibold bg-black text-white mt-1"
    >
      View Certificate →
    </a>
  </div>
);
