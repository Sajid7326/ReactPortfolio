"use client";
import React, { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";

export function EncryptedText({
  text,
  encryptedClassName = "",
  revealedClassName = "",
  revealDelayMs = 40,
}) {
  const [displayed, setDisplayed] = useState("");
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setDisplayed((prev) => {
        const revealed = text.slice(0, revealedCount);
        const encrypted = text
          .slice(revealedCount)
          .split("")
          .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
          .join("");

        return revealed + encrypted;
      });

      setRevealedCount((c) => {
        if (c >= text.length) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, revealDelayMs);

    return () => clearInterval(interval);
  }, [text, revealDelayMs, revealedCount]);

  return (
    <span className="inline-block font-mono text-sm md:text-base">
      <span className={revealedClassName}>
        {displayed.slice(0, revealedCount)}
      </span>
      <span className={encryptedClassName}>
        {displayed.slice(revealedCount)}
      </span>
    </span>
  );
}
