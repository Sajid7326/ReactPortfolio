"use client";

import React from "react";
import { myEducation } from "../constants";
import { CometCard } from "../ui/comet-card";

export function Education() {
  return (
    <section
      id="education"
      className="relative flex flex-col gap-4 p-11 w-full max-w-[1000px] mx-auto"
    >
      {/* 🔹 Section Heading */}
      <h2 className="mb-10 mt-20 text-center text-4xl font-bold text-white">
        Education
      </h2>

      {/* 🔹 Education Cards Grid */}
      <div className="mb-2 ml- [-25] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[150px] auto-rows-fr justify-items-center">
        {myEducation.map((item, idx) => (
             <CometCard
                 key={idx}
                 title={item.degree}
                 institution={item.institution}
                 subtitle={item.period}
                 description={item.description}
                 image={item.image}
                 thesis={item.thesis}  
                />

        ))}
      </div>

      {/* 🔹 Gradient Overlay (optional, if you want fade effect) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-neutral-to-t from-gray-900"></div>
    </section>
  );
}

export default Education;
