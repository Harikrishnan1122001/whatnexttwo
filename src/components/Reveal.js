import React from "react";
import { motion } from "framer-motion";

/**
 * Generic scroll-reveal wrapper.
 * direction: "up" | "left" | "right" | "scale" | "none"
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
  amount = 0.25,
}) {
  const variants = {
    up: { initial: { opacity: 0, y: 48 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -56 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 56 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.88 }, animate: { opacity: 1, scale: 1 } },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
