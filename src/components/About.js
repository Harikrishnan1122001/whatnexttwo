import React from "react";
import Reveal from "./Reveal";
import "./About.css";

const STATS = [
  { n: "260+", l: "Celebrations planned" },
  { n: "12", l: "Years of craft" },
  { n: "40+", l: "Venue partners" },
  { n: "98%", l: "Referral rate" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <Reveal direction="left" className="about-media">
          <img
            src="https://picsum.photos/seed/verabloom-about1/700/860"
            alt="Wedding planner arranging orchid florals on a reception table"
            className="about-img main"
          />
          <img
            src="https://picsum.photos/seed/verabloom-about2/420/420"
            alt="Close up of wedding rings on a bed of petals"
            className="about-img float"
          />
          <div className="about-badge">
            <span>12</span>
            <p>Years crafting celebrations</p>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal direction="up">
            <span className="eyebrow">Who We Are</span>
            <h2>
              Part planner, part <em>storyteller</em>, entirely devoted to you.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p>
              Vera &amp; Bloom began as two friends organising a single garden
              wedding and grew into a full-service studio for weddings,
              engagements and milestone events. We still work the way we
              started: closely, honestly, and with an obsession for the small
              details that make a day feel unforgettable.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p>
              Whether it's an intimate elopement in the hills or a five
              hundred guest reception, our team manages every vendor, every
              timeline and every "what if" — so you can simply be present in
              your own story.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3} className="about-stats">
            {STATS.map((s) => (
              <div key={s.l} className="stat">
                <h3>{s.n}</h3>
                <span>{s.l}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
