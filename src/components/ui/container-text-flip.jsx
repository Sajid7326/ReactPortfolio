"use client";

import React, { useEffect, useState } from "react";

export function ContainerTextFlip({ 
  words = [], 
  speed = 3000, 
  className = "" 
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, speed);

    return () => clearInterval(interval);
  }, [words, speed]);

  return (
    <span 
      className={`inline-block font-bold text-cyan-400 transition-all duration-300 ${className}`}
    >
      {words[index]}
    </span>
  );
}
