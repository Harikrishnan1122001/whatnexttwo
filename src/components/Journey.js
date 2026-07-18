import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "./Reveal";
import "./Journey.css";

const STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    desc: "We learn your story, your guest list and the feeling you want your day to hold.",
  },
  {
    n: "02",
    title: "Design & Budget",
    desc: "A moodboard, vendor shortlist and a budget that we hold ourselves accountable to.",
  },
  {
    n: "03",
    title: "Vendor & Logistics",
    desc: "Contracts, timelines and site visits — coordinated so nothing falls between the cracks.",
  },
  {
    n: "04",
    title: "Final Countdown",
    desc: "Rehearsal walk-throughs, run sheets and a day-of team that knows every cue.",
  },
  {
    n: "05",
    title: "Celebration Day",
    desc: "We manage the room so you can be fully, unhurriedly present in it.",
  },
];

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section id="journey" className="section journey">
      <div className="section-head">
        <Reveal direction="up">
          <span className="eyebrow">How It Works</span>
          <h2>Your journey with us</h2>
        </Reveal>
      </div>

      <div className="journey-track" ref={ref}>
        <div className="journey-line-bg" />
        <motion.div className="journey-line-fill" style={{ scaleY: scrollYProgress }} />

        {STEPS.map((s, i) => (
          <Reveal
            key={s.n}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={0.05}
            className={`journey-step ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="journey-num">{s.n}</div>
            <div className="journey-copy">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
