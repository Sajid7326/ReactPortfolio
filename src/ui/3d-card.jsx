"use client";

import React, { createContext, useContext, useRef } from "react";

const CardContext = createContext({});

/**
 * Main Container – adds perspective & hover listener
 */
export function CardContainer({ children, className = "", ...props }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / 50) * -1;
    const rotateY = x / 50;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleMouseLeave() {
    const card = ref.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }

  return (
    <CardContext.Provider value={{}}>
      <div
        className={`relative cursor-pointer`}
        style={{ perspective: "100px" }}
      >
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-300 ease-out ${className}`}
          {...props}
        >
          {children}
        </div>
      </div>
    </CardContext.Provider>
  );
}

/**
 * Card Body – the main clickable surface
 */
export function CardBody({ children, className = "", ...props }) {
  return (
    <div
      className={`relative rounded-xl transform-gpu transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Item – floats above the body (translateZ)
 */
export function CardItem({
  children,
  className = "",
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateZ = 0,
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag
      className={`transform-gpu transition-all duration-300 ${className}`}
      style={{
        transform: `
          translateZ(${translateZ}px)
          translateX(${translateX}px)
          translateY(${translateY}px)
          rotateX(${rotateX}deg)
          rotateZ(${rotateZ}deg)
        `,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
