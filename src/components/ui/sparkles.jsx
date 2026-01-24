import React, { useCallback, useEffect, useRef } from "react";

export const SparklesCore = React.forwardRef(
  (
    {
      background = "transparent",
      particleColor = "#FFF",
      particleDensity = 600,
      minSize = 0.4,
      maxSize = 1,
      className = "",
    },
    ref
  ) => {
    const canvasRef = ref || useRef(null);
    const animationRef = useRef(null);

    const drawParticles = useCallback(
      (ctx, particles) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        particles.forEach((p) => {
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          p.x += p.vx;
          p.y += p.vy;

          if (p.x <= 0 || p.x >= ctx.canvas.width) p.vx *= -1;
          if (p.y <= 0 || p.y >= ctx.canvas.height) p.vy *= -1;
        });
      },
      [particleColor]
    );

    const animate = useCallback(
      (ctx, particles) => {
        drawParticles(ctx, particles);
        animationRef.current = requestAnimationFrame(() =>
          animate(ctx, particles)
        );
      },
      [drawParticles]
    );

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");

      function init() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles = Array.from({ length: particleDensity }).map(() => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        }));

        animate(ctx, particles);
      }

      init();

      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(animationRef.current);
        init();
      });

      resizeObserver.observe(canvas);

      return () => {
        cancelAnimationFrame(animationRef.current);
        resizeObserver.disconnect();
      };
    }, [animate, particleDensity, minSize, maxSize]);

    return (
      <canvas
        ref={canvasRef}
        className={`pointer-events-none ${className}`}
        style={{ background }}
      />
    );
  }
);
