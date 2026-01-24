"use client";
import React, { useEffect, useState } from "react";

export function TypewriterEffectSmooth({ words, speed = 120, delay = 1000 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let timeout;

    const writeWord = async () => {
      const word = words[index].text;
      for (let i = 0; i <= word.length; i++) {
        if (!isMounted) return;
        setText(word.slice(0, i));
        await new Promise(res => setTimeout(res, speed));
      }

      await new Promise(res => setTimeout(res, delay));
      setIndex(prev => (prev + 1) % words.length);
    };

    writeWord();
    return () => { isMounted = false };
  }, [index, words, speed, delay]);

  return (
    <span className="inline-block">
      {text}
    </span>
  );
}
