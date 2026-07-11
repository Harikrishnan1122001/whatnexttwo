import courses from "../data/courses";
import CourseCard from "./CourseCard";
import useReveal from "../hooks/useReveal";

export default function Courses() {
  const [headRef, headVisible] = useReveal();
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

  return (
    <section className="courses" id="courses">
      <div className="wrap">
        <div
          ref={headRef}
          className={`section-head reveal ${headVisible ? "is-visible" : ""}`}
        >
          <span className="eyebrow">All routes, one board</span>
          <h2>10 courses. Every class live, every batch small.</h2>
          <p>
            Every course below is taught live over Google Meet by an
            instructor — pick a route and message us for the next available
            batch.
          </p>
        </div>

        <div className="ticket-grid">
          {courses.map((course, i) => (
            <CourseCard
              key={course.code}
              course={course}
              delayClass={delays[i % delays.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
