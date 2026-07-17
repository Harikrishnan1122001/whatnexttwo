import React from 'react';
import './Story.css';

const POINTS = [
  { n: '01', title: 'We listen first', body: 'Every couple gets a discovery session before a single mood board is made — your story shapes the design, not a template.' },
  { n: '02', title: 'One planner, start to finish', body: 'A dedicated lead planner stays with you from the first call to the last farewell, so nothing is lost in handoffs.' },
  { n: '03', title: 'Vetted vendors only', body: 'Florists, caterers and photographers we have worked with for years — no surprises on the big day.' },
];

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="container story__grid">
        <div className="story__media reveal-left" data-reveal>
          <div className="story__frame">
            <div className="story__photo story__photo--a" />
            <div className="story__photo story__photo--b" />
            <div className="story__ring" />
          </div>
        </div>

        <div className="story__copy">
          <p className="eyebrow reveal" data-reveal>Our Story</p>
          <h2 className="story__heading reveal" data-reveal style={{ transitionDelay: '80ms' }}>
            Designed around the way <em>you</em> love.
          </h2>
          <p className="story__lead reveal" data-reveal style={{ transitionDelay: '140ms' }}>
            Rosewater &amp; Sky began with a single Madurai wedding, planned on a
            kitchen table with a shared spreadsheet and too much coffee. Eight
            years on, we still plan every wedding like it's the only one that
            week — blending soft blush palettes with cool sky-blue accents for
            a look that photographs as beautifully as it feels.
          </p>

          <div className="story__points stagger">
            {POINTS.map((p, i) => (
              <div
                className="story__point reveal"
                data-reveal
                key={p.n}
                style={{ '--i': i, transitionDelay: `${200 + i * 90}ms` }}
              >
                <span className="story__num">{p.n}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
