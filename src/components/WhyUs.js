import { FiVideo, FiUsers, FiMessageCircle } from "react-icons/fi";
import useReveal from "../hooks/useReveal";

const FEATURES = [
  {
    icon: <FiVideo />,
    title: "100% live, on Google Meet",
    text: "Every class is live — no pre-recorded videos to sit through. Ask questions and get answered in real time.",
  },
  {
    icon: <FiUsers />,
    title: "Small batches",
    text: "Batches are kept small so the instructor actually knows your name and where you're stuck.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Talk to a human first",
    text: "No sign-up forms or hidden fees to browse. Message us on WhatsApp or call — we'll answer directly.",
  },
];

function FeatureCard({ feature, delayClass }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`why__card reveal ${delayClass} ${visible ? "is-visible" : ""}`}
    >
      <div className="why__icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </div>
  );
}

export default function WhyUs() {
  const [headRef, headVisible] = useReveal();
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

  return (
    <section className="why" id="why">
      <div className="wrap">
        <div
          ref={headRef}
          className={`section-head reveal ${headVisible ? "is-visible" : ""}`}
        >
          <span className="eyebrow">Why What Next</span>
          <h2>Built around one classroom: Google Meet.</h2>
        </div>

        <div className="why__grid">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delayClass={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
