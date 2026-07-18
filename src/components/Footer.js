import React from "react";
import { FaInstagram, FaPinterestP, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-mark">V&amp;B</span>
          <span className="brand-name">Vera &amp; Bloom</span>
        </div>
        <p>Weddings &amp; events, designed around your story.</p>
        <div className="footer-social">
          <a href="#top" aria-label="Instagram"><FaInstagram /></a>
          <a href="#top" aria-label="Pinterest"><FaPinterestP /></a>
          <a href="#top" aria-label="Facebook"><FaFacebookF /></a>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>Studio</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#journey">Journey</a>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Stories</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="#contact">hello@verabloom.com</a>
          <a href="#contact">+91 98765 43210</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Vera &amp; Bloom Studio. All rights reserved.</span>
      </div>
    </footer>
  );
}
