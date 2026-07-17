import React, { useEffect, useState } from 'react';
import './Testimonials.css';

const QUOTES = [
  {
    quote: "They understood our vision before we could even fully explain it. The blush-and-blue palette on our mandap looked like it belonged in a magazine.",
    name: 'Divya & Arjun',
    place: 'Madurai',
  },
  {
    quote: "Not one thing went wrong on the day — and if it did, we never knew about it. That's the kind of calm every couple deserves.",
    name: 'Priya & Karthik',
    place: 'Theni',
  },
  {
    quote: "Our families still talk about the reception lighting. Rosewater & Sky turned a simple hall into something we didn't recognise.",
    name: 'Meera & Sanjay',
    place: 'Trichy',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % QUOTES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="testi">
      <div className="container">
        <div className="testi__head">
          <p className="eyebrow reveal" data-reveal>Love Notes</p>
          <h2 className="reveal" data-reveal style={{ transitionDelay: '80ms' }}>
            What our couples say
          </h2>
        </div>

        <div className="testi__card reveal-scale" data-reveal>
          <span className="testi__mark">"</span>
          <p className="testi__quote" key={active}>{QUOTES[active].quote}</p>
          <div className="testi__author">
            <span className="testi__name">{QUOTES[active].name}</span>
            <span className="testi__place">{QUOTES[active].place}</span>
          </div>

          <div className="testi__dots">
            {QUOTES.map((q, i) => (
              <button
                key={q.name}
                className={`testi__dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${q.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
