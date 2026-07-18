import React from "react";
import { motion } from "framer-motion";
import {
  GiFlowerPot,
  GiDiamondRing,
  GiPartyPopper,
} from "react-icons/gi";
import { PiMapPinLight, PiCameraLight, PiForkKnifeLight } from "react-icons/pi";
import Reveal from "./Reveal";
import "./Services.css";

const SERVICES = [
  {
    icon: <GiDiamondRing />,
    title: "Full Wedding Planning",
    desc: "End-to-end design, budgeting and coordination from your first idea to the final farewell.",
  },
  {
    icon: <PiMapPinLight />,
    title: "Destination Weddings",
    desc: "Scouting, logistics and on-ground crews for celebrations anywhere in the world.",
  },
  {
    icon: <GiFlowerPot />,
    title: "Decor & Styling",
    desc: "Floral direction, table design and lighting that carry a single, cohesive story.",
  },
  {
    icon: <GiPartyPopper />,
    title: "Corporate & Social Events",
    desc: "Product launches, galas and milestone parties, run with the same care as a wedding day.",
  },
  {
    icon: <PiForkKnifeLight />,
    title: "Catering Coordination",
    desc: "Menu tastings and vendor management matched to your guests and your palate.",
  },
  {
    icon: <PiCameraLight />,
    title: "Photo & Film Curation",
    desc: "Hand-picked photographers and filmmakers whose style matches your own.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section-head">
        <Reveal direction="up">
          <span className="eyebrow">What We Do</span>
          <h2>Services built around your day</h2>
        </Reveal>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} direction="up" delay={i * 0.08} className="service-card-wrap">
            <motion.div
              className="service-card"
              whileHover={{ y: -10, boxShadow: "0 30px 50px -20px rgba(186,85,211,0.45)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
