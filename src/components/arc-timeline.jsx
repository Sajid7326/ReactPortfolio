"use client";
import React from "react";
import { RocketIcon, CubeIcon, GlobeIcon, StarIcon } from "@radix-ui/react-icons";
import { myEducation } from "../constants";


// Transform myEducation into ArcTimelineItem[]
export const EDUCATION_TIMELINE = myEducation.map((item) => {
  const steps = [
    { icon: <RocketIcon width={20} height={20} />, content: item.degree },
    { icon: <CubeIcon width={20} height={20} />, content: item.institution },
    { icon: <StarIcon width={20} height={20} />, content: item.description },
  ];

  if (item.thesis) {
    steps.push({
      icon: <GlobeIcon width={20} height={20} />,
      content: (
        <a href={item.thesis.link} target="_blank" rel="noopener noreferrer">
          <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            View Undergraduate Thesis
          </button>
        </a>
      ),
    });
  }

  return { time: item.period, steps };
});

export function ArcTimeline({ data, defaultActiveStep, arcConfig }) {
  return (
    <div className="relative flex flex-col gap-8 p-6">
      {data.map((item, idx) => (
        <div key={idx}>
          <h3 className="font-bold text-white mb-2">{item.time}</h3>
          <div className="flex flex-col gap-2 ml-7">
            {item.steps.map((step, sidx) => (
              <div key={sidx} className="flex items-center gap-2 text-white">
                {step.icon} <span>{step.content}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default function EducationArcTimeline() {
  return (
    <section id="education-arc" className="relative flex flex-col gap-12 p-11 w-full max-w-[1000px] mx-auto">
      <h2 className="mb-10 mt-20 text-center text-4xl font-bold text-white">
        Education Timeline
      </h2>

      <ArcTimeline
        data={EDUCATION_TIMELINE}
        defaultActiveStep={{ time: "2020 – 2025", stepIndex: 0 }}
        arcConfig={{
          circleWidth: 3500,
          angleBetweenMinorSteps: 0.5,
          lineCountFillBetweenSteps: 6,
          boundaryPlaceholderLinesCount: 40,
        }}
      />
    </section>
  );
}
