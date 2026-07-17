import React from 'react';
import config from '../config';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">R<span>&amp;</span>S</span>
          <p>{config.brandName} — {config.tagline}</p>
        </div>

        <div className="footer__social">
          <a href={config.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={config.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={config.pinterest} target="_blank" rel="noreferrer">Pinterest</a>
        </div>

        <p className="footer__copy">© {year} {config.brandName}. Crafted with care in Tamil Nadu.</p>
      </div>
    </footer>
  );
}
