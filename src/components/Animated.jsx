"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

// Utility for merging class names (instead of cn, since cn not defined)
function cn(...classes) {
  return twMerge(classes.filter(Boolean).join(" "));
}

// EducationCard component
export const EducationCard = ({
  degree,
  institution,
  description,
  icon,
  color,
  period,
  thesis,  
}) => {
  return (
    <figure
      className={twMerge(
        "w-full max-w-[1000px] mx-auto rounded-xl bg-gray-800 p-5 shadow-lg transition hover:scale-[102%] hover:shadow-xl"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-3xl">{degree}</span>
            <span className="mx-1">·</span>
            <span className="text-lg text-gray-500">{period}</span>
          </figcaption>
          <p className="text-xl font-normal dark:text-white/60">{institution}</p>
          <p className="text-xl font-normal dark:text-white/60">{description}</p>

          {/* ✅ Show button only if thesis exists */}
          {thesis && (
            <a
              href={thesis.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block w-fit rounded-lg bg-sky-600 px-3 py-1 text-xl font-medium text-white transition hover:bg-sky-900"
            >
              View {thesis.name}
            </a>
          )}
        </div>
      </div>
    </figure>
  );
};

// AnimatedList wrapper
export function AnimatedList({ children }) {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  );
}

// Demo usage
export function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {/* Example with dummy data */}
        <EducationCard
          degree="BSc in CSE"
          institution="CUET"
          description="Studied Computer Science"
          icon="🎓"
          color="#4CAF50"
          period="2020-2024"
        />
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
