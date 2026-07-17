import React from 'react';
import './Timeline.css';

const SCHEDULE = [
  { time: '7:00 AM', title: 'Bridal Getting Ready', desc: 'Hair, makeup and styling begin with soft morning light and rose-gold tones.' },
  { time: '10:30 AM', title: 'Mandap Muhurtham', desc: 'The sacred ceremony, styled in blush florals with sky-blue drapery.' },
  { time: '1:00 PM', title: 'Family Lunch', desc: 'A relaxed sit-down meal for close family between ceremony and reception.' },
  { time: '5:30 PM', title: 'Couple Portraits', desc: 'Golden-hour photography across the venue grounds.' },
  { time: '7:30 PM', title: 'Reception & First Dance', desc: 'Lights, music and the celebration everyone has been waiting for.' },
  { time: '10:00 PM', title: 'Send-off', desc: 'A petal shower farewell as the newlyweds depart.' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="tl">
      <div className="container">
        <div className="tl__head">
          <p className="eyebrow reveal" data-reveal>A Sample Wedding Day</p>
          <h2 className="reveal" data-reveal style={{ transitionDelay: '80ms' }}>
            How the hours unfold
          </h2>
        </div>

        <div className="tl__list">
          <span className="tl__spine" aria-hidden="true" />
          {SCHEDULE.map((item, i) => (
            <div
              className={`tl__item ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              data-reveal
              key={item.time}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="tl__dot" />
              <div className="tl__card">
                <span className="tl__time">{item.time}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
