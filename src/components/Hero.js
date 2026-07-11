import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import SplitFlap from "./SplitFlap";
import { buildWhatsAppLink, buildCallLink } from "../data/config";

const ROTATING_WORDS = [
  "PYTHON",
  "FULL STACK",
  "DATA SCIENCE",
  "UI / UX",
  "AI",
  "DIGITAL MARKETING",
];

const BOARD_ROWS = [
  { code: "PY-101", name: "Python — New Batch", time: "7:00 PM", status: "Boarding" },
  { code: "FS-201", name: "Full Stack", time: "8:00 AM", status: "Open" },
  { code: "DS-310", name: "Data Science", time: "6:30 PM", status: "Open" },
  { code: "UX-140", name: "UI / UX Design", time: "9:00 AM", status: "Open" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div>
          <span className="eyebrow hero__eyebrow">Live classes · Google Meet only</span>
          <h1 className="hero__title">
            <span className="hero__title-line">What's next?</span>
            <span className="hero__title-line">
              <SplitFlap words={ROTATING_WORDS} />
            </span>
          </h1>
          <p className="hero__desc">
            What Next runs live, instructor-led classes over Google Meet —
            no recorded courses, no app to install. Pick a track, sit for a
            free demo class, and start learning with a real instructor and a
            small batch of students.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn-whatsapp"
              href={buildWhatsAppLink(
                "Hi What Next! I'd like to know more about your courses and batch timings."
              )}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={18} /> Enquire on WhatsApp
            </a>
            <a className="btn btn-call" href={buildCallLink()}>
              <FaPhoneAlt size={14} /> Call now
            </a>
          </div>

          <p className="hero__note">
            NO WALK-IN CAMPUS · CLASSES CONDUCTED LIVE ON GOOGLE MEET · ENQUIRE VIA WHATSAPP OR CALL
          </p>
        </div>

        <div className="board" aria-hidden="true">
          <div className="board__head">
            <span><span className="board__dot" />Live batches</span>
            <span>Google Meet</span>
          </div>
          {BOARD_ROWS.map((row) => (
            <div className="board__row" key={row.code}>
              <span>{row.code}</span>
              <span>{row.name}</span>
              <span>{row.time}</span>
              <span className="board__status">{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
