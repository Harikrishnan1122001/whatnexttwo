import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiQuotesFill } from "react-icons/pi";
import Reveal from "./Reveal";
import "./Testimonials.css";

const REVIEWS = [
  {
    name: "Anjali & Rohan",
    event: "Wedding, Ooty",
    quote:
      "They held every detail we didn't even know to worry about. Our families just got to enjoy the day.",
  },
  {
    name: "Meera & Dev",
    event: "Destination Wedding, Goa",
    quote:
      "The design felt entirely us — not a template with our names added. Guests are still talking about it.",
  },
  {
    name: "Priya Nair",
    event: "Corporate Gala, Chennai",
    quote:
      "Flawless run-of-show, calm under pressure, and genuinely lovely to work with from start to finish.",
  },
  {
    name: "Kavya & Arjun",
    event: "Engagement, Madurai",
    quote:
      "From the first call we felt understood. Every vendor they picked matched our taste perfectly.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="section-head">
        <Reveal direction="up">
          <span className="eyebrow">Kind Words</span>
          <h2>Stories from our couples</h2>
        </Reveal>
      </div>

      <div className="testimonial-stage">
        <PiQuotesFill className="quote-mark" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="testimonial-quote">{REVIEWS[index].quote}</p>
            <h4>{REVIEWS[index].name}</h4>
            <span>{REVIEWS[index].event}</span>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
