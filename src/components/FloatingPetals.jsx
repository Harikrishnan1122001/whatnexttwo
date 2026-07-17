import React, { useMemo } from 'react';
import './FloatingPetals.css';

// Generates a deterministic-ish set of drifting petal/dot particles.
// Purely decorative — aria-hidden so screen readers skip it.
export default function FloatingPetals({ count = 16, tone = 'mixed' }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.round((i / count) * 100 + (Math.random() * 6 - 3));
      const size = 6 + Math.random() * 10;
      const duration = 14 + Math.random() * 12;
      const delay = -(Math.random() * duration);
      const drift = 40 + Math.random() * 80;
      const kind =
        tone === 'mixed'
          ? i % 2 === 0 ? 'petal--rose' : 'petal--sky'
          : `petal--${tone}`;
      return { id: i, left, size, duration, delay, drift, kind };
    });
  }, [count, tone]);

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className={`petal ${p.kind}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.3,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
