import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

const HEART_PATH =
  "M100 178 C 100 178 30 132 30 82 C 30 52 52 34 78 34 C 90 34 100 40 100 52 C 100 40 110 34 122 34 C 148 34 170 52 170 82 C 170 132 100 178 100 178 Z";

const FLOATING_HEARTS = [
  { left: "18%", size: 14, duration: 3.2, delay: 0.2 },
  { left: "32%", size: 9,  duration: 2.6, delay: 0.9 },
  { left: "50%", size: 12, duration: 3.6, delay: 0.0 },
  { left: "68%", size: 8,  duration: 2.8, delay: 1.3 },
  { left: "82%", size: 13, duration: 3.1, delay: 0.6 },
];

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            className="loader-curtain left"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
          />
          <motion.div
            className="loader-curtain right"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
          />

          {/* little hearts floating up in the background */}
          <div className="loader-hearts" aria-hidden="true">
            {FLOATING_HEARTS.map((h, i) => (
              <motion.span
                key={i}
                className="mini-heart"
                style={{ left: h.left, width: h.size, height: h.size }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: -160, opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: h.duration,
                  delay: h.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="loader-content">
            <svg
              className="loader-heart"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* heart outline draws itself */}
              <motion.path
                d={HEART_PATH}
                stroke="#BA55D3"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              {/* heart fills in and gently beats */}
              <motion.path
                d={HEART_PATH}
                fill="#C9A44C"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: [0, 1, 0.92, 1.06, 1],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 1.05 },
                  scale: {
                    duration: 1.4,
                    delay: 1.05,
                    times: [0, 0.35, 0.55, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeInOut",
                  },
                }}
                style={{ transformOrigin: "100px 100px" }}
              />
            </svg>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
            >
              Vera &amp; Bloom
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}