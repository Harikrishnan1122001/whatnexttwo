import React, { useEffect, useRef } from 'react';
import FloatingPetals from './FloatingPetals';
import { whatsappLink } from '../config';
import './Hero.css';

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const el = parallaxRef.current;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (el) el.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" className="hero">
      <FloatingPetals count={18} />
      <div className="hero__glow hero__glow--rose" />
      <div className="hero__glow hero__glow--sky" />

      <div className="hero__content container">
        <p className="eyebrow reveal is-visible">Wedding &amp; Event Curation · Tamil Nadu</p>

        <h1 className="hero__title">
          <span className="reveal is-visible" style={{ transitionDelay: '80ms' }}>Two hearts,</span>
          <span className="hero__amp-row">
            <svg
              className="hero__amp"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <text x="60" y="92" textAnchor="middle" className="hero__amp-glyph">&amp;</text>
            </svg>
            <span className="reveal is-visible" style={{ transitionDelay: '160ms' }}>one exquisite day.</span>
          </span>
        </h1>

        <p className="hero__sub reveal is-visible" style={{ transitionDelay: '240ms' }}>
          From the first sketch of an idea to the final dance — we design, style
          and manage weddings that feel unmistakably yours, in blush pink and
          quiet blue.
        </p>

        <div className="hero__actions reveal is-visible" style={{ transitionDelay: '320ms' }}>
          <a
            className="btn btn-primary"
            href={whatsappLink('Hi! I would love to plan my wedding with Rosewater & Sky.')}
            target="_blank"
            rel="noreferrer"
          >
            Start Planning
          </a>
          <a className="btn btn-ghost" href="#timeline">See a Wedding Day →</a>
        </div>

        <div className="hero__stats reveal is-visible" style={{ transitionDelay: '400ms' }}>
          <div className="hero__stat">
            <strong>120+</strong>
            <span>Weddings curated</span>
          </div>
          <div className="hero__stat">
            <strong>4.9★</strong>
            <span>Average rating</span>
          </div>
          <div className="hero__stat">
            <strong>8yrs</strong>
            <span>Since our first "yes"</span>
          </div>
        </div>
      </div>

      <div ref={parallaxRef} className="hero__ring hero__ring--1" />
      <div className="hero__ring hero__ring--2" />

      <a href="#story" className="hero__scroll" aria-label="Scroll to next section">
        <span className="hero__scroll-dot" />
      </a>
    </section>
  );
}
