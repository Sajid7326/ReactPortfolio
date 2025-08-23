"use client";

import React from "react";
import { myEducation } from "../constants";
import { AnimatedList, EducationCard } from "../components/Animated"; 

export function Education() {
  return (
    <div className="flex flex-col gap-4 p-11 w-full max-w-[1000px] mx-auto">
      {/* 🔹 Section Heading */}
      <h2 className="mb-5 ml- -10 mt-20 text-center text-4xl font-bold text-white">
        Educations
      </h2>

      {/* 🔹 Animated Education List */}
      <AnimatedList>
        {myEducation.map((item, idx) => (
          <EducationCard key={idx} {...item} />
        ))}
      </AnimatedList>

      {/* 🔹 Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900"></div>
    </div>
  );
}

export default Education;
