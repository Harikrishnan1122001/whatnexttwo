import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BRAND, buildWhatsAppLink } from "../data/config";
import logo from "../assets/logo.png";

const LINKS = [
  { href: "#courses", label: "Courses" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#enquire", label: "Enquire" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a href="#top" className="nav__brand">
          <img src={logo} alt={BRAND.name} className="nav__logo" />
        </a>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="nav__cta desktop-only"
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> Chat with us
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <nav className={`nav__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
        <span style={{ fontSize: 12, opacity: 0.6 }}>{BRAND.tagline}</span>
      </nav>
    </header>
  );
}
