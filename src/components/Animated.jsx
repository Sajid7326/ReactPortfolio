"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

// Utility
function cn(...classes) {
  return twMerge(classes.filter(Boolean).join(" "));
}

// 📱 Mobile Card
const EducationCardMobile = ({
  degree,
  institution,
  description,
  icon,
  color,
  period,
  thesis,
  mobileWidth,
  mobileFont,
}) => {
  return (
    <figure
      className={twMerge(
        "mx-auto rounded-xl bg-gray-800 p-5 shadow-lg transition hover:scale-[102%] hover:shadow-xl",
        "block md:hidden",
        mobileWidth
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre font-medium dark:text-white">
            <span className={mobileFont.degree}>{degree}</span>
            <span className="mx-450">·</span>
            <span className={cn(mobileFont.period, "text-gray-500")}>{period}</span>
          </figcaption>
          <p className={cn(mobileFont.institution, "font-normal dark:text-white/70")}>
            {institution}
          </p>
          <p className={cn(mobileFont.description, "font-normal dark:text-white/60")}>
            {description}
          </p>

          {thesis && (
            <a
              href={thesis.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block w-fit rounded-lg bg-sky-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-sky-900"
            >
              View {thesis.name}
            </a>
          )}
        </div>
      </div>
    </figure>
  );
};

// 💻 Desktop Card
const EducationCardDesktop = ({
  degree,
  institution,
  description,
  icon,
  color,
  period,
  thesis,
  desktopWidth,
  desktopFont,
}) => {
  return (
    <figure
      className={twMerge(
        "mx-auto rounded-xl bg-gray-800 p-2 shadow-lg transition hover:scale-[102%] hover:shadow-xl",
        "hidden md:block",
        desktopWidth
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre font-medium dark:text-white">
            <span className={desktopFont.degree}>{degree}</span>
            <span className="mx-1">·</span>
            <span className={cn(desktopFont.period, "text-gray-500")}>{period}</span>
          </figcaption>
          <p className={cn(desktopFont.institution, "font-normal dark:text-white/60")}>
            {institution}
          </p>
          <p className={cn(desktopFont.description, "font-normal dark:text-white/60")}>
            {description}
          </p>

          {thesis && (
            <a
              href={thesis.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block w-fit rounded-lg bg-sky-600 px-3 py-1 text-base font-medium text-white transition hover:bg-sky-900"
            >
              View {thesis.name}
            </a>
          )}
        </div>
      </div>
    </figure>
  );
};

// 🔥 Unified Responsive Component
const ResponsiveEducationCard = ({
  mobileWidth = "w-full max-w-[350px]",
  desktopWidth = "w-full max-w-[900px]",
  mobileFont = {
    degree: "text-xs",
    period: "text-xs",
    institution: "text-xs",
    description: "text-xs",
  },
  desktopFont = {
    degree: "text-3xl",
    period: "text-lg",
    institution: "text-2xl",
    description: "text-xl",
  },
  ...props
}) => {
  return (
    <>
      <EducationCardMobile {...props} mobileWidth={mobileWidth} mobileFont={mobileFont} />
      <EducationCardDesktop {...props} desktopWidth={desktopWidth} desktopFont={desktopFont} />
    </>
  );
};

// ✅ AnimatedList wrapper
const AnimatedList = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

// ✅ Exports (all in one place)
export { ResponsiveEducationCard, ResponsiveEducationCard as EducationCard, AnimatedList };
