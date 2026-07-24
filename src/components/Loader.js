import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Emblem from "./Emblem";
import "./loader.css";

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState("draw"); // draw -> word -> exit -> gone
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("word"), 1500);
    const t2 = setTimeout(() => setPhase("exit"), 2500);
    const t3 = setTimeout(() => {
      setVisible(false);
      onDone && onDone();
    }, 3250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const word = "SPD EXPORTS";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ y: 0 }}
          animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader__rays" aria-hidden="true" />
          <Emblem size={104} draw className="loader__emblem" />

          <div className="loader__word" aria-label="SPD Exports">
            {word.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={
                  phase === "word" || phase === "exit"
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{ delay: 0.02 * i, duration: 0.4 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="loader__tag"
            initial={{ opacity: 0 }}
            animate={
              phase === "word" || phase === "exit" ? { opacity: 1 } : {}
            }
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            from Indian soil to global aroma
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
