import Reveal from './Reveal.jsx'

const pillars = [
  {
    title: 'Mentors, not just videos',
    text: 'Weekly 1:1 check-ins with someone who reviews your code and your career plan.',
    glyph: 'M4 18c3-8 6-8 8-8s5 0 8 8',
  },
  {
    title: 'Built on real projects',
    text: 'Every module ships something working — no course is "complete" until you can show it.',
    glyph: 'M5 5h14v14H5zM9 9h6v6H9z',
  },
  {
    title: 'Small, honest cohorts',
    text: 'We cap cohorts so questions get answered the same day, not the same week.',
    glyph: 'M6 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM12 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM3 20c0-3.3 2.7-6 6-6M9 20c0-3.3 2.7-6 6-6',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal as="div" className="section-head">
        <p className="eyebrow">Why What Next</p>
        <h2>Direction matters more than speed</h2>
      </Reveal>

      <div className="about__grid">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 90} className="about__card">
            <svg
              className="about__glyph"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d={pillar.glyph} />
            </svg>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
