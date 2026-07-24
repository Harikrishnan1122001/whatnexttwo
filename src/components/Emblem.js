import React from "react";
import { motion } from "framer-motion";

/**
 * Emblem — the sunrise / globe / trade-route mark.
 * Used three ways across the site:
 *  - as the load-sequence signature (draw-on animation)
 *  - small + static in the nav
 * -  as a live "voyage dial" whose arrow rotates with scroll progress
 */
export default function Emblem({
  size = 120,
  draw = false,
  rotation = 0,
  className = "",
}) {
  const rays = Array.from({ length: 16 });

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--sun-gold)" />
          <stop offset="55%" stopColor="var(--sun-orange)" />
          <stop offset="100%" stopColor="var(--sun-red)" />
        </linearGradient>
        <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue-bright)" />
          <stop offset="100%" stopColor="var(--blue-deep)" />
        </linearGradient>
      </defs>

      {/* rays */}
      <motion.g
        initial={draw ? { opacity: 0 } : false}
        animate={draw ? { opacity: 1 } : false}
        transition={{ duration: 0.4 }}
      >
        {rays.map((_, i) => {
          const angle = (i / rays.length) * 360;
          return (
            <motion.rect
              key={i}
              x="97"
              y="6"
              width="6"
              height="26"
              rx="3"
              fill="url(#sunGrad)"
              transform={`rotate(${angle} 100 100)`}
              style={{ transformOrigin: "100px 100px" }}
              initial={draw ? { scaleY: 0, opacity: 0 } : false}
              animate={draw ? { scaleY: 1, opacity: 1 } : false}
              transition={{ delay: 0.02 * i, duration: 0.35, ease: "easeOut" }}
            />
          );
        })}
      </motion.g>

      {/* globe base */}
      <motion.circle
        cx="100"
        cy="108"
        r="58"
        fill="url(#globeGrad)"
        initial={draw ? { scale: 0, opacity: 0 } : false}
        animate={draw ? { scale: 1, opacity: 1 } : false}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* sun cap on globe */}
      <motion.path
        d="M42 90 A58 58 0 0 1 158 90 L158 108 A58 58 0 0 1 42 108 Z"
        fill="url(#sunGrad)"
        initial={draw ? { opacity: 0 } : false}
        animate={draw ? { opacity: 1 } : false}
        transition={{ delay: 0.5, duration: 0.5 }}
        clipPath="url(#globeClip)"
      />
      <clipPath id="globeClip">
        <circle cx="100" cy="108" r="58" />
      </clipPath>

      {/* longitude / latitude lines */}
      <motion.g
        stroke="var(--cream)"
        strokeWidth="2.5"
        opacity="0.85"
        initial={draw ? { opacity: 0 } : false}
        animate={draw ? { opacity: 0.85 } : false}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <ellipse cx="100" cy="108" rx="24" ry="58" fill="none" />
        <path d="M42 108 Q100 80 158 108" fill="none" />
        <path d="M50 132 Q100 152 150 132" fill="none" />
      </motion.g>

      {/* trade-route arrow */}
      <motion.g
        initial={draw ? { x: -14, opacity: 0 } : false}
        animate={
          draw
            ? { x: 0, opacity: 1 }
            : { rotate: rotation }
        }
        transition={
          draw
            ? { delay: 0.95, duration: 0.5, ease: "easeOut" }
            : { type: "spring", stiffness: 60, damping: 18 }
        }
        style={{ transformOrigin: "100px 108px" }}
      >
        <path
          d="M132 96 L162 108 L132 122 L140 108 Z"
          fill="var(--sun-gold)"
          stroke="var(--sun-red)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}
