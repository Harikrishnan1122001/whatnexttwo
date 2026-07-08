import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__slash" aria-hidden="true" />

      <div className="hero__inner">
        <Reveal as="p" className="eyebrow">
          Learning platform
        </Reveal>

        <Reveal>
          <h1 className="hero__title">
            Rise with the
            <br />
            <em>right direction.</em>
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="hero__sub">
            What Next turns beginners into hireable practitioners — Python, web
            development, data science and design, taught as a straight line
            from &ldquo;I don&apos;t know where to start&rdquo; to a portfolio
            you can show up with.
          </p>
        </Reveal>

        <Reveal delay={180} className="hero__actions">
          <a href="#courses" className="btn btn--primary">
            See all courses
          </a>
          <a href="#contact" className="btn btn--ghost">
            Talk to us
          </a>
        </Reveal>

        <Reveal delay={260} className="hero__stats">
          <div>
            <strong>4</strong>
            <span>guided tracks</span>
          </div>
          <div>
            <strong>1:1</strong>
            <span>mentor check-ins</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>project-based</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
