import { courses } from '../data/courses.js'
import CourseCard from './CourseCard.jsx'
import Reveal from './Reveal.jsx'

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <Reveal as="div" className="section-head">
        <p className="eyebrow">Courses</p>
        <h2>Pick a track, follow the path</h2>
        <p className="section-head__sub">
          Every track ends the same way: a real project and a person who can
          vouch for your work. Tap a course to chat with us on WhatsApp.
        </p>
      </Reveal>

      <div className="courses__grid">
        {courses.map((course, i) => (
          <Reveal key={course.code} delay={i * 90} className="reveal-card">
            <CourseCard course={course} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
