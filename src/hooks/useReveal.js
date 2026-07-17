import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to every [data-reveal] element within
 * the returned ref's subtree, adding `is-visible` once each enters the
 * viewport. Elements un-reveal is intentionally NOT reversed, so animations
 * play once per page visit (feels calmer while scrolling up/down).
 */
export default function useReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current || document;
    const els = root.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px', ...options }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [options]);

  return containerRef;
}
