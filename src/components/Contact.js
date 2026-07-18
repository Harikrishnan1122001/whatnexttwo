import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-grid">
        <Reveal direction="left" className="contact-info">
          <span className="eyebrow on-dark">Let's Talk</span>
          <h2>Tell us about your day</h2>
          <p>
            Share a few details and our planning team will get back to you
            within 48 hours with next steps and availability.
          </p>

          <ul className="contact-details">
            <li>
              <HiOutlinePhone /> +91 98765 43210
            </li>
            <li>
              <HiOutlineMail /> hello@verabloom.com
            </li>
            <li>
              <HiOutlineLocationMarker /> Studio 4, Anna Nagar, Madurai
            </li>
          </ul>
        </Reveal>

        <Reveal direction="right" className="contact-form-wrap">
          {sent ? (
            <motion.div
              className="contact-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Thank you ✦</h3>
              <p>Your message has reached us. We'll be in touch very soon.</p>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text" placeholder="Anjali Menon" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="date">Event date</label>
                  <input id="date" type="date" />
                </div>
                <div className="form-field">
                  <label htmlFor="type">Event type</label>
                  <select id="type" defaultValue="Wedding">
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Destination Wedding</option>
                    <option>Corporate Event</option>
                    <option>Other Celebration</option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Tell us a little about your vision</label>
                <textarea id="message" rows="4" placeholder="Guest count, location, style you love..." />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileTap={{ scale: 0.96 }}
              >
                Send Enquiry
              </motion.button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
