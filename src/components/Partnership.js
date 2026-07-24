import React from "react";
import { motion } from "framer-motion";
import "./partnership.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const CONTACT = [
  { label: "Address", value: "216A, Jawahar Main Road, S.S. Colony, Madurai – 625016" },
  { label: "Email", value: "spdexports@outlook.com" },
  { label: "Email (alt)", value: "spdexportsofficial@gmail.com" },
  { label: "Phone / WhatsApp", value: "+91 73395 59595" },
  { label: "Web", value: "www.spdexports.com" },
];

export default function Partnership() {
  return (
    <section id="partnership" className="partner">
      <svg className="partner__route" viewBox="0 0 1000 300" preserveAspectRatio="none">
        <motion.path
          d="M10 240 C 200 60, 350 260, 500 120 S 800 40, 990 160"
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="2.5"
          strokeDasharray="10 10"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--sun-gold)" />
            <stop offset="100%" stopColor="var(--blue-bright)" />
          </linearGradient>
        </defs>
        {[
          [10, 240],
          [500, 120],
          [990, 160],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="6"
            fill="var(--sun-red)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 + i * 0.5, duration: 0.4 }}
          />
        ))}
      </svg>

      <div className="partner__inner">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="eyebrow">Let's Build A</span>
          <h2>
            Global <em>partnership.</em>
          </h2>
          <p className="partner__lede">
            We're committed to delivering quality, consistency and long-term
            value to every client we ship to — wherever in the world that is.
          </p>

          <a
            className="btn btn--primary"
            href="https://wa.me/917339559595"
            target="_blank"
            rel="noreferrer"
          >
            Message us on WhatsApp
          </a>
        </motion.div>

        <motion.div
          className="partner__card"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15 }}
        >
          {CONTACT.map((c) => (
            <div className="partner__row" key={c.label}>
              <span>{c.label}</span>
              <strong>{c.value}</strong>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
