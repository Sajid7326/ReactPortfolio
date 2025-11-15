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
    offset: ["start 1%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="c-space section-spacing flex flex-col items-center justify-center min-h-screen"
      ref={containerRef}
    >
      <h2 className="text-center text-5xl font-bold text-white mb-10">
        Work Experience
      </h2>

      <div ref={ref} className="relative pb-20">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center pt-10 md:pt-40 md:gap-10"
          >
            {/* LEFT SIDE (dates, title, job) */}
            <div className="sticky z-80 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>

              {/* DESKTOP TEXT */}
              <div className="flex-col hidden gap-5 md:flex md:pl-10 text-white">
                <h3 className="text-xl font-bold text-neutral-300">
                  {item?.date}
                </h3>
                <h3 className="text-3xl text-neutral-400">{item?.title}</h3>
                <h3 className="text-2xl text-neutral-500">{item?.job}</h3>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
            {/* MOBILE TITLE BLOCK */}
                  <div className="block mb-4 space-y-2 text-2xl font-bold text-left text-neutral-300 md:hidden">
                         <h3 className="text-xl text-neutral-400">{item?.date}</h3>
                         <h3 className="text-3xl text-neutral-200">{item?.title}</h3>
                         <h3 className="text-2xl text-neutral-400">{item?.job}</h3>
                  </div>

              {item?.content?.map((content, index) => (
                <li className="mb-8 text-xl text-neutral-100" key={index}>
                  {content}
                </li>
              ))}
            </div>
          </div>
        ))}

        {/* Vertical timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-1 left-2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 left-0 w-full bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
