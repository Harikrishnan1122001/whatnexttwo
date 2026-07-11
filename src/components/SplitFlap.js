import { useEffect, useState } from "react";

// Mimics an airport / train departure board: the word flips to the
// next value on an interval using a CSS 3D rotateX animation.
export default function SplitFlap({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || words.length < 2) return undefined;

    const timer = setInterval(() => {
      setFlipping(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFlipping(false);
      }, 260);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="split-flap" aria-live="polite">
      <span className={`split-flap__panel ${flipping ? "is-flipping" : ""}`}>
        {words[index]}
      </span>
    </span>
  );
}
