import { openWhatsAppForCourse } from '../utils/whatsapp.js'

export default function CourseCard({ course }) {
  const { code, name, level, duration, description, skills, featured } = course

  function handleEnquire() {
    openWhatsAppForCourse(name)
  }

  return (
    <article className={`course-card${featured ? ' course-card--featured' : ''}`}>
      <div className="course-card__top">
        <span className="course-card__code">{code}</span>
        {featured && <span className="course-card__badge">Most enquired</span>}
      </div>

      <h3>{name}</h3>
      <p className="course-card__meta">
        {level} · {duration}
      </p>
      <p className="course-card__desc">{description}</p>

      <ul className="course-card__skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <button
        type="button"
        className="btn btn--whatsapp"
        onClick={handleEnquire}
        aria-label={`Enquire about the ${name} course on WhatsApp`}
      >
        Enquire on WhatsApp
      </button>
    </article>
  )
}
