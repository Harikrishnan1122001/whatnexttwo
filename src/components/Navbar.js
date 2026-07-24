import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Emblem from "./Emblem";
import "./navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#partnership", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav__inner">
        <a
          href="#top"
          className="nav__brand"
          onClick={(e) => {
            e.preventDefault();
            handleLink("#top");
          }}
        >
          <Emblem size={38} />
          <span>
            SPD <em>Exports</em>
          </span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleLink(l.href);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="nav__cta"
          href="https://wa.me/917339559595"
          target="_blank"
          rel="noreferrer"
        >
          Get a Quote
        </a>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLink(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              className="nav__mobile-cta"
              href="https://wa.me/917339559595"
              target="_blank"
              rel="noreferrer"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
