import React from "react";
import { motion } from "framer-motion";
import Emblem from "./Emblem";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__rays" aria-hidden="true" />
      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero__copy">
          <motion.span variants={item} className="eyebrow">
            Madurai, Tamil&nbsp;Nadu &middot; est. agro-export house
          </motion.span>
          <motion.h1 variants={item} className="hero__title">
            From Indian soil
            <br />
            to <em>global aroma.</em>
          </motion.h1>
          <motion.p variants={item} className="hero__desc">
            SPD Exports grows, grades and ships export-grade cardamom, turmeric
            and floral absolutes &mdash; sourced straight from farmers,
            processed under strict quality control, and packed to the
            standard of the world's most demanding fragrance, food and
            pharmaceutical buyers.
          </motion.p>
          <motion.div variants={item} className="hero__actions">
            <a
              href="#partnership"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#partnership")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Partnership
            </a>
            <a
              href="#products"
              className="btn btn--ghost"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Products
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__stats">
            <div>
              <strong>APEDA · FSSAI · Spice&nbsp;Board</strong>
              <span>fully licensed &amp; compliant</span>
            </div>
            <div>
              <strong>3</strong>
              <span>product lines, one quality standard</span>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero__mark" variants={item}>
          <div className="hero__orbit">
            <span className="hero__orbit-ring hero__orbit-ring--1" />
            <span className="hero__orbit-ring hero__orbit-ring--2" />
            <motion.div
              className="hero__emblem-wrap"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              <Emblem size={230} />
            </motion.div>
            <span className="hero__dot hero__dot--1">Cardamom</span>
            <span className="hero__dot hero__dot--2">Turmeric</span>
            <span className="hero__dot hero__dot--3">Floral Extracts</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span />
        scroll
      </motion.div>
    </section>
  );
}
