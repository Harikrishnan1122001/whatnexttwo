import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <motion.div
          className="about__label"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="eyebrow">About Us</span>
          <h2>
            Rooted in quality.
            <br />
            <em>Driven by global standards.</em>
          </h2>
        </motion.div>

        <motion.div
          className="about__body"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1 }}
        >
          <p>
            SPD Exports is a Madurai-based agro export company built around
            one idea: the raw materials leaving our warehouse should carry
            the same aroma, potency and character they had the moment they
            left the field. We work across spices and floral botanicals for
            the food, wellness, perfumery and pharmaceutical industries.
          </p>
          <p>
            A close network of growers, scientific-grade processing and
            disciplined quality control mean every shipment holds up from
            origin to destination &mdash; wherever that destination is.
          </p>

          <div className="about__licenses">
            {["APEDA", "FSSAI", "Spice Board"].map((l) => (
              <span key={l} className="license-chip">
                {l}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
