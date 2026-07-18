import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
    >
      <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); handleLinkClick("#top"); }}>
        <span className="brand-mark">V&amp;B</span>
        <span className="brand-name">Vera &amp; Bloom</span>
      </a>

      <nav className="nav-links desktop">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); handleLinkClick(l.href); }}>
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="btn btn-primary nav-cta desktop"
        onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
      >
        Plan With Us
      </a>

      <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu">
        <HiMenu size={26} />
      </button>

      <motion.div
        className="mobile-drawer"
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <HiX size={26} />
        </button>
        <nav className="mobile-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); handleLinkClick(l.href); }}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
          >
            Plan With Us
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
