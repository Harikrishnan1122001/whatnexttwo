import React from 'react';
import './Gallery.css';

const ITEMS = [
  { tone: 'rose', size: 'tall', label: 'Mandap Florals' },
  { tone: 'sky', size: 'wide', label: 'Reception Lighting' },
  { tone: 'gold', size: 'reg', label: 'Bridal Details' },
  { tone: 'sky', size: 'reg', label: 'Table Styling' },
  { tone: 'rose', size: 'wide', label: 'First Look' },
  { tone: 'gold', size: 'tall', label: 'Sangeet Night' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__head">
          <p className="eyebrow reveal" data-reveal>Recent Celebrations</p>
          <h2 className="reveal" data-reveal style={{ transitionDelay: '80ms' }}>
            Moments we've had the honour to plan
          </h2>
        </div>

        <div className="gallery__grid">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`gallery__tile gallery__tile--${item.size} gallery__tile--${item.tone} reveal-scale`}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="gallery__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
