// comet-card.jsx
import React from "react";

export function CometCard({ title, image, institution, subtitle, description, thesis }) {
  return (
    <button
      type="button"
      className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[rgba(255,255,255,0.05)] p-2 md:my-20 md:p-4 hover:scale-105 transition-transform"
      aria-label={`View ${title}`}
      style={{
        transformStyle: "preserve-3d",
        transform: "none",
        opacity: 1,
      }}
    >
      {/* Image Section */}
      <div className="mx-2 flex-1">
        <div className="relative mt-2 aspect-[5/5] w-full">
          <img
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-cover contrast-75"
            alt={title}
            src={image}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              opacity: 1,
            }}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-1 flex flex-col items-start p-4 font-mono text-white">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-gray-300">{institution}</div>
        <div className="text-xs text-gray-400 opacity-70">{subtitle}</div>

        {/* 🔹 Optional Description */}
        {description && (
          <div className="mt-2 text-xs text-gray-400">{description}</div>
        )}

        {/* 🔹 Thesis Button */}
        {thesis && (
          <a
            href={thesis.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700 transition"
          >
            {thesis.name}
          </a>
        )}
      </div>
    </button>
  );
}
