import React from "react";
import { motion } from "framer-motion";
import "./whyChooseUs.css";

const ITEMS = [
  {
    title: "Direct farmer sourcing",
    desc: "We buy close to the source, which keeps traceability and quality tight from the first harvest.",
  },
  {
    title: "International quality compliance",
    desc: "Every lot is processed and tested against the standards our overseas buyers already trust.",
  },
  {
    title: "Custom bulk & retail packaging",
    desc: "From jumbo export sacks to private-label retail units, packed to your specification.",
  },
  {
    title: "Consistent supply chain",
    desc: "A reliable sourcing network means volumes and timelines hold steady, season after season.",
  },
  {
    title: "Export documentation support",
    desc: "We handle the paperwork — phytosanitary, certificates of origin, and everything customs asks for.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why">
      <div className="why__inner">
        <motion.div
          className="why__head"
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="eyebrow eyebrow--light">Why Choose Us</span>
          <h2>What holds a partnership together</h2>
        </motion.div>

        <motion.div
          className="why__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ITEMS.map((it) => (
            <motion.div className="why__card" variants={card} key={it.title}>
              <span className="why__mark" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <path
                    d="M4 11.5l4.5 4.5L18 6.5"
                    stroke="var(--sun-gold)"
                    strokeWidth="2.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
