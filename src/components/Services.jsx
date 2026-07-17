import React, { useRef } from 'react';
import './Services.css';

const SERVICES = [
  {
    title: 'Full Wedding Planning',
    desc: 'End-to-end design, vendor management and day-of coordination for the entire celebration.',
    tag: 'Most loved',
    tone: 'rose',
  },
  {
    title: 'Venue Styling & Décor',
    desc: 'Blush-and-sky floral design, mandap styling, lighting and table settings tailored to your palette.',
    tag: 'Design-led',
    tone: 'sky',
  },
  {
    title: 'Day-of Coordination',
    desc: 'Already planned it yourself? Our team runs the schedule so you can simply be present.',
    tag: 'Peace of mind',
    tone: 'gold',
  },
  {
    title: 'Destination & Multi-day',
    desc: 'Mehendi to reception — logistics, guest travel and multi-venue coordination handled end-to-end.',
    tag: 'For big celebrations',
    tone: 'rose',
  },
];

function ServiceCard({ s, i }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
    card.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
  };
  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={cardRef}
      className={`svc-card svc-card--${s.tone} reveal-scale`}
      data-reveal
      style={{ transitionDelay: `${i * 100}ms` }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <span className="svc-card__tag">{s.tag}</span>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <span className="svc-card__arrow">→</span>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__head">
          <p className="eyebrow reveal" data-reveal>What We Do</p>
          <h2 className="reveal" data-reveal style={{ transitionDelay: '80ms' }}>
            Services built around your celebration
          </h2>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard s={s} i={i} key={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
