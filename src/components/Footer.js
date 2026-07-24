import React from "react";
import Emblem from "./Emblem";
import "./Footer.css";

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/917339559595" },
  { label: "Google", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Emblem size={34} />
          <span>
            SPD <em>Exports</em>
          </span>
        </div>

        <div className="footer__socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} SPD Exports, Madurai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
