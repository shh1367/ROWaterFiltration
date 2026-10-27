import { useEffect } from 'react';

/**
 * Reveals every `.reveal` element once it enters the viewport.
 * Falls back to visible content when reduced motion is requested or
 * IntersectionObserver is unavailable, so content is never hidden.
 */
export default function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
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
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
