import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import "./Banner.css";

export default function Banner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section className="banner" ref={ref}>
      <motion.div className="banner-img" style={{ y }}>
        <img
          src="https://picsum.photos/seed/verabloom-banner/1800/700"
          alt="Long banquet table set for a wedding reception, decorated with orchid centrepieces"
        />
      </motion.div>
      <div className="banner-tint" />
      <Reveal direction="up" className="banner-quote">
        <p>
          "Every love story is different — the way we plan for it shouldn't
          be the same twice."
        </p>
        <span>— Vera &amp; Bloom Studio</span>
      </Reveal>
    </section>
  );
}
