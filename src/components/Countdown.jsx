import React, { useEffect, useState } from 'react';
import { whatsappLink } from '../config';
import './Countdown.css';

// Booking-window countdown: rolling 21-day availability window, purely illustrative.
function getTargetDate() {
  const target = new Date();
  target.setDate(target.getDate() + 21);
  target.setHours(23, 59, 59, 0);
  return target;
}

function useCountdown(target) {
  const [remaining, setRemaining] = useState(target.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => setRemaining(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const clamp = Math.max(remaining, 0);
  const days = Math.floor(clamp / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamp / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamp / (1000 * 60)) % 60);
  const seconds = Math.floor((clamp / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [target] = useState(getTargetDate);
  const { days, hours, minutes, seconds } = useCountdown(target);

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="cd">
      <div className="container cd__inner reveal-scale" data-reveal>
        <div className="cd__copy">
          <p className="eyebrow cd__eyebrow">Limited 2027 Dates</p>
          <h2>Our next booking window closes in</h2>
          <p className="cd__sub">Peak-season dates fill quickly — reserve your planner before the window shuts.</p>
        </div>

        <div className="cd__units">
          {units.map((u) => (
            <div className="cd__unit" key={u.label}>
              <span className="cd__num">{String(u.value).padStart(2, '0')}</span>
              <span className="cd__label">{u.label}</span>
            </div>
          ))}
        </div>

        <a
          className="btn btn-primary cd__cta"
          href={whatsappLink('Hi! I would like to check availability for my wedding date.')}
          target="_blank"
          rel="noreferrer"
        >
          Check Availability
        </a>
      </div>
    </section>
  );
}
