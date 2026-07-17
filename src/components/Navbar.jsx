import React, { useEffect, useState } from 'react';
import config from '../config';
import './Navbar.css';

const LINKS = [
  { href: '#story', label: 'Our Story' },
  { href: '#services', label: 'Services' },
  { href: '#timeline', label: 'The Day' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Love Notes' },
  { href: '#contact', label: 'Enquire' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand">
          <span className="nav__mark">R<span className="nav__amp">&amp;</span>S</span>
          <span className="nav__brandtext">{config.brandName}</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav__cta">Plan With Us</a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="nav__mobile-link" onClick={handleNav}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={handleNav}>Plan With Us</a>
      </div>
    </header>
  );
}
