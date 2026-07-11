import { FaWhatsapp } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import { buildWhatsAppLink } from "../data/config";

export default function CourseCard({ course, delayClass }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`ticket reveal ${delayClass || ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="ticket__top">
        <span className="ticket__code">{course.code}</span>
        <span className="ticket__mode">LIVE ON GMEET</span>
      </div>

      <h3>{course.title}</h3>
      <p className="ticket__gate">{course.gate}</p>

      <div className="ticket__perf" />

      <p className="ticket__blurb">{course.blurb}</p>

      <div className="ticket__meta">
        <span>{course.duration}</span>
        <span>{course.level}</span>
      </div>

      <a
        className="ticket__cta"
        href={buildWhatsAppLink(
          `Hi What Next! I'm interested in the ${course.title} course (${course.code}). Could you share the batch timings?`
        )}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp /> Ask about this course
      </a>
    </div>
  );
}
