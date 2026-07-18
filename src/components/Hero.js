import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.4]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="hero">
      <motion.div className="hero-media" style={{ scale: imgScale }}>
        <img
          src="https://picsum.photos/seed/verabloom-hero/1800/1200"
          alt="Bride and groom celebrating under string lights at an outdoor wedding reception"
        />
      </motion.div>
      <motion.div className="hero-overlay" style={{ opacity: overlayOpacity }} />

      <div className="hero-petals" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`petal petal-${i}`} />
        ))}
      </div>

      <motion.div className="hero-copy" style={{ y: textY, opacity: textOpacity }}>
        <motion.span
          className="eyebrow on-dark"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Wedding &amp; Event Management
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Celebrations,
          <br />
          <em>written in your voice.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          From the first proposal to the last dance, we design weddings and
          events that feel unmistakably yours — every colour, every detail,
          every guest cared for.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#contact" className="btn btn-primary" onClick={(e)=>{e.preventDefault();document.querySelector("#contact").scrollIntoView({behavior:"smooth"});}}>
            Start Planning
          </a>
          <a href="#services" className="btn btn-outline on-dark" onClick={(e)=>{e.preventDefault();document.querySelector("#services").scrollIntoView({behavior:"smooth"});}}>
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2.2, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
      >
        <HiArrowDown size={20} />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
