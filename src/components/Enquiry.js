import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import {
  BRAND,
  PHONE_NUMBER,
  buildWhatsAppLink,
  buildCallLink,
} from "../data/config";
import courses from "../data/courses";

export default function Enquiry() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: "", phone: "", course: courses[0].title, message: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi What Next! I'd like to enquire about a course.`,
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Course: ${form.course}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noreferrer");
  };

  return (
    <section className="enquiry" id="enquire">
      <div className="wrap enquiry__grid" ref={ref}>
        <div className={`enquiry__side reveal ${visible ? "is-visible" : ""}`}>
          <span className="eyebrow">Enquire now</span>
          <h2>Tell us what you want to learn — we'll message you back.</h2>
          <p>
            No account, no application form to fill out on the website.
            Fill this in and it opens a pre-filled WhatsApp message straight
            to us, or reach us directly below.
          </p>

          <div className="enquiry__direct">
            <div className="enquiry__direct-row">
              <FaWhatsapp color="#25D366" />
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
            <div className="enquiry__direct-row">
              <FaPhoneAlt color="#FF4D4D" />
              <a href={buildCallLink()}>{PHONE_NUMBER}</a>
            </div>
            <div className="enquiry__direct-row">
              <FaEnvelope color="#FF4D4D" />
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>
          </div>
        </div>

        <form
          className={`form reveal reveal-delay-2 ${visible ? "is-visible" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className="form__row">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Priya Kumar"
              value={form.name}
              onChange={update("name")}
              required
            />
          </div>

          <div className="form__row">
            <label htmlFor="phone">Phone / WhatsApp number</label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 98765 43210"
              value={form.phone}
              onChange={update("phone")}
              required
            />
          </div>

          <div className="form__row">
            <label htmlFor="course">Course you're interested in</label>
            <select id="course" value={form.course} onChange={update("course")}>
              {courses.map((c) => (
                <option key={c.code} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form__row">
            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              placeholder="Preferred time, questions about the syllabus, anything else..."
              value={form.message}
              onChange={update("message")}
            />
          </div>

          <button type="submit" className="btn btn-whatsapp form__submit">
            <FaWhatsapp size={18} /> Send enquiry on WhatsApp
          </button>

          <p className="form__hint">
            This opens WhatsApp with your details filled in — nothing is
            stored on this website. Prefer a call? Use the "Call now" button
            up top or the number on the left.
          </p>
        </form>
      </div>
    </section>
  );
}
