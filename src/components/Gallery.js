import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import "./Gallery.css";

const IMAGES = [
  { seed: "verabloom-g1", tall: true, caption: "Garden ceremony, Coimbatore" },
  { seed: "verabloom-g2", tall: false, caption: "Reception florals" },
  { seed: "verabloom-g3", tall: false, caption: "Mandap detailing" },
  // { seed: "verabloom-g4", tall: true, caption: "Beachside vows, Goa" },
  { seed: "verabloom-g5", tall: false, caption: "Evening reception lighting" },
  { seed: "verabloom-g6", tall: false, caption: "Bridal table styling" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="section-head">
        <Reveal direction="up">
          <span className="eyebrow">Moments We've Made</span>
          <h2>A glimpse into our celebrations</h2>
        </Reveal>
      </div>

      <div className="gallery-grid">
        {IMAGES.map((img, i) => (
          <Reveal
            key={img.seed}
            direction="scale"
            delay={i * 0.06}
            className={`gallery-item ${img.tall ? "tall" : ""}`}
          >
            <motion.div
              className="gallery-frame"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.img
                src={`https://picsum.photos/seed/${img.seed}/700/${img.tall ? 900 : 560}`}
                alt={img.caption}
                variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="gallery-caption"
                variants={{ rest: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.35 }}
              >
                {img.caption}
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
