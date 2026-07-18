import React from "react";
import "./Marquee.css";

const WORDS = ["Weddings", "Destination Events", "Engagements", "Receptions", "Corporate Galas", "Anniversaries"];

export default function Marquee() {
  const track = [...WORDS, ...WORDS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((w, i) => (
          <span className="marquee-item" key={i}>
            {w} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
