"use client";
import React, { useEffect, useState } from "react";

export function TypewriterEffectSmooth({
  words,
  speed = 80,
  delay = 1200,
  className = "",
}) {
  const [displayed, setDisplayed] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (!currentWord) return;

    // typing characters
    if (charIndex < currentWord.text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[wordIndex] = {
            ...currentWord,
            text: currentWord.text.slice(0, charIndex + 1),
          };
          return copy;
        });
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    // move to next word
    const pause = setTimeout(() => {
      setWordIndex((prev) => prev + 1);
      setCharIndex(0);
    }, delay);

    return () => clearTimeout(pause);
  }, [charIndex, wordIndex, words, speed, delay]);
return (
  <div className={`flex items-center gap-1 ${className}`}>
    {displayed.map((word, i) => (
      <span key={i} className={word.className || ""}>
        {word.text}
      </span>
    ))}

    {/* Blinking cursor */}
    <span className="ml-1 w-[2px] h-4 bg-cyan-400 animate-pulse" />
  </div>
);

}
