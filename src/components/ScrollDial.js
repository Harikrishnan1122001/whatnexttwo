import React, { useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Emblem from "./Emblem";
import "./ScrollDial.css";

export default function ScrollDial() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setShow(v > 0.06));
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <motion.button
      className="dial"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div style={{ rotate }}>
        <Emblem size={46} />
      </motion.div>
    </motion.button>
  );
}
