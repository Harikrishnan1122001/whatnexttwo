import React, { useState } from 'react';
import config, { whatsappLink } from '../config';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', date: '', message: '' });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! I'm ${form.name || 'a couple'} planning a wedding${
      form.date ? ` around ${form.date}` : ''
    }. ${form.message || ''}`.trim();
    window.open(whatsappLink(msg), '_blank', 'noreferrer');
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow reveal" data-reveal>Let's Talk</p>
          <h2 className="reveal" data-reveal style={{ transitionDelay: '80ms' }}>
            Tell us about your day
          </h2>
          <p className="contact__lead reveal" data-reveal style={{ transitionDelay: '140ms' }}>
            Share a few details and we'll get back within 24 hours — or reach
            us directly on WhatsApp or phone.
          </p>

          <div className="contact__info reveal" data-reveal style={{ transitionDelay: '200ms' }}>
            <a href={`tel:${config.phoneRaw}`} className="contact__row">
              <span className="contact__icon">📞</span>
              <span>{config.phone}</span>
            </a>
            <a href={whatsappLink('Hi! I have a question about your wedding packages.')} target="_blank" rel="noreferrer" className="contact__row">
              <span className="contact__icon">💬</span>
              <span>Chat on WhatsApp</span>
            </a>
            <a href={`mailto:${config.email}`} className="contact__row">
              <span className="contact__icon">✉️</span>
              <span>{config.email}</span>
            </a>
            <div className="contact__row">
              <span className="contact__icon">📍</span>
              <span>{config.address}</span>
            </div>
          </div>
        </div>

        <form className="contact__form reveal-right" data-reveal onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Divya & Arjun" required />
          </label>
          <label>
            Wedding date <span className="contact__optional">(optional)</span>
            <input name="date" value={form.date} onChange={handleChange} placeholder="e.g. Feb 2027" />
          </label>
          <label>
            Tell us a little
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Guest count, city, style you're imagining..." />
          </label>
          <button type="submit" className="btn btn-primary contact__submit">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
