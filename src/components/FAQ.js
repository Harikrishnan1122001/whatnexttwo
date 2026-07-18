import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import Reveal from "./Reveal";
import "./FAQ.css";

const FAQS = [
  {
    q: "How far in advance should we book you?",
    a: "Most couples reach out 9–14 months before their date, especially for peak wedding season or destination events. That said, we've delivered beautiful weddings with as little as 8 weeks' notice — reach out and we'll be honest about what's possible.",
  },
  {
    q: "Do you only plan weddings?",
    a: "Weddings are our heart, but our team also plans engagements, anniversaries, sangeets, and corporate or social events that call for the same level of design and coordination.",
  },
  {
    q: "What does 'full planning' actually include?",
    a: "Budget management, vendor sourcing and contracts, design direction, timeline creation, guest logistics, and full on-site coordination for your rehearsal and event day — essentially everything between your first idea and your last dance.",
  },
  {
    q: "Can you work with a venue or vendors we've already booked?",
    a: "Absolutely. Many of our clients come to us with a venue or a few vendors already chosen. We slot in, review existing contracts, and coordinate everyone toward one shared plan.",
  },
  {
    q: "Do you take destination weddings outside India?",
    a: "Yes — our team has planned and travelled for celebrations across Goa, Southeast Asia and the Gulf. We handle logistics, local vendor vetting and travel coordination for you and your guests.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing depends on scope — day-of coordination, partial planning, or full planning — and the scale of your event. After a discovery call we send a clear, itemised proposal with no hidden fees.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="section-head">
        <Reveal direction="up">
          <span className="eyebrow">Good To Know</span>
          <h2>Frequently asked questions</h2>
        </Reveal>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} direction="up" delay={i * 0.05} className="faq-item-wrap">
              <div className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <HiPlus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
