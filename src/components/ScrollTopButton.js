import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import "./ScrollTopButton.css";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top-btn"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.08 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <svg className="progress-ring" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="19" className="progress-ring-bg" />
            <motion.circle
              cx="22"
              cy="22"
              r="19"
              className="progress-ring-fill"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <HiArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
