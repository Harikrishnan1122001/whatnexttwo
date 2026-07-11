import useReveal from "../hooks/useReveal";

const STEPS = [
  {
    step: "STEP 01",
    title: "Message us",
    text: "Tap WhatsApp or call directly and tell us which course you're curious about.",
  },
  {
    step: "STEP 02",
    title: "Get your batch time",
    text: "We share the next live batch timing and a Google Meet link for a free demo class.",
  },
  {
    step: "STEP 03",
    title: "Join on Google Meet",
    text: "No app, no download — join the class from any browser at the scheduled time.",
  },
  {
    step: "STEP 04",
    title: "Learn live, weekly",
    text: "Attend live sessions with an instructor and a small batch, week after week.",
  },
];

function StepCard({ step, delayClass }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`how__card reveal ${delayClass} ${visible ? "is-visible" : ""}`}
    >
      <span className="how__step">{step.step}</span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </div>
  );
}

export default function HowItWorks() {
  const [headRef, headVisible] = useReveal();
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

  return (
    <section className="how" id="how">
      <div className="wrap">
        <div
          ref={headRef}
          className={`section-head reveal ${headVisible ? "is-visible" : ""}`}
        >
          <span className="eyebrow">How classes work</span>
          <h2>Four steps from enquiry to your first live class.</h2>
        </div>

        <div className="how__grid">
          {STEPS.map((s, i) => (
            <StepCard key={s.step} step={s} delayClass={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
