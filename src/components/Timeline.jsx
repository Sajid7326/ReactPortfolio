"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen pt-20 pb-20"
      ref={containerRef}
    >
      <h2 className="text-center text-5xl font-bold text-white mb-10">
        Work Experience
      </h2>

      <div ref={ref} className="relative pb-20 w-full">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center pt-10 md:pt-30 md:gap-10"
          >
            {/* LEFT SIDE */}
            <div className="sticky z-10 flex flex-col items-center self-start max-w-xs md:flex-row top-80 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-neutral-900">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-700 border-neutral-500" />
              </div>

              {/* Desktop info */}
              <div className="hidden md:flex flex-col gap-5 pl-10 text-white relative group">
                <p className="text-lg font-semibold text-neutral-300">
                  {item?.date}
                </p>

                <p className="text-3xl text-neutral-200">{item?.title}</p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline underline-offset-4 transition"
                  >
                    {item.job}
                  </a>
                ) : (
                  <span>{item.job}</span>
                )}

                {/* HOVER PROJECT CARD */}
                {item.project && item.tasks && (
                  <div
                    className="
                    absolute left-full top-0 ml-6 min-w-[420px] max-w-[450px]
                    rounded-xl border border-white/20 bg-white/10 backdrop-blur
                    shadow-xl p-4 z-50
                    opacity-0 group-hover:opacity-100 group-hover:translate-x-2
                    transition-all duration-300
                  "
                  >
                    <p className="font-semibold text-white mb-2">
                      {item.project}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-white/80 text-[13px] leading-snug">
                      {item.tasks.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE CONTENT (Mobile / Tasks) */}
            <div className="relative w-full pl-20 pr-5 md:pl-4">
              {/* Mobile Text */}
              <div className="block mb-5 md:hidden text-left space-y-4">
                <p className="text-lg font-semibold text-neutral-300">
                  {item?.date}
                </p>
                <p className="text-2xl text-neutral-200">{item?.title}</p>
                <p className="text-xl text-neutral-400">{item?.job}</p>

                {/* MOBILE TASKS ALWAYS VISIBLE */}
                {item.project && (
                  <p className="text-neutral-300 font-semibold mt-3">
                    {item.project}
                  </p>
                )}
                {item.tasks?.map((t, i) => (
                  <li key={i} className="text-neutral-200">
                    {t}
                  </li>
                ))}
              </div>

              {/* DESKTOP BULLET CONTENT (Normal Responsibilities without hover) */}
              {item?.content?.map((c, i) => (
                <li className="mb-5 pl-1 text-lg text-neutral-200" key={i}>
                  {c}
                </li>
              ))}
            </div>
          </div>
        ))}

        {/* VERTICAL TIMELINE LINE */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-1 left-0.5 top-0 overflow-hidden w-[2px]
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_80%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 left-0 w-full 
              bg-gradient-to-t from-purple-500 via-purple-300/40 to-transparent rounded-full
              transition-opacity duration-200"
          />
        </div>
      </div>
    </div>
  );
}
