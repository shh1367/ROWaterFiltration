import { useEffect, useRef } from 'react';
import { site } from '../data/content.js';
import { ArrowLeftIcon } from './Icons.jsx';
import SystemArt from './art/SystemArt.jsx';

// Fixed bubble layout so the atmosphere stays stable across renders.
const bubbles = [
  { x: '8%', size: 16, duration: 24, delay: -3, drift: 26, opacity: 0.45 },
  { x: '18%', size: 8, duration: 19, delay: -11, drift: -18, opacity: 0.5 },
  { x: '27%', size: 22, duration: 30, delay: -17, drift: 30, opacity: 0.3 },
  { x: '36%', size: 6, duration: 17, delay: -6, drift: -12, opacity: 0.55 },
  { x: '45%', size: 12, duration: 26, delay: -21, drift: 22, opacity: 0.4 },
  { x: '54%', size: 5, duration: 15, delay: -9, drift: -10, opacity: 0.5 },
  { x: '62%', size: 18, duration: 28, delay: -14, drift: 24, opacity: 0.32 },
  { x: '70%', size: 9, duration: 21, delay: -2, drift: -16, opacity: 0.48 },
  { x: '78%', size: 26, duration: 34, delay: -24, drift: 34, opacity: 0.24 },
  { x: '86%', size: 7, duration: 18, delay: -7, drift: -14, opacity: 0.52 },
  { x: '93%', size: 14, duration: 25, delay: -19, drift: 20, opacity: 0.36 },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const hero = heroRef.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      hero.style.setProperty('--parallax', progress.toFixed(3));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__rays" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__bubbles" aria-hidden="true">
        {bubbles.map((bubble) => (
          <span
            key={bubble.x}
            className="bubble"
            style={{
              '--x': bubble.x,
              '--size': `${bubble.size}px`,
              '--duration': `${bubble.duration}s`,
              '--delay': `${bubble.delay}s`,
              '--drift': `${bubble.drift}px`,
              '--peak-opacity': bubble.opacity,
            }}
          />
        ))}
      </div>

      <div className="shell hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">{site.hero.eyebrow}</span>
          <h1 className="hero__title" id="hero-title">
            راهی <em>شفاف‌تر</em> برای نوشیدن آب در خانه
          </h1>
          <p className="hero__text">{site.hero.text}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={site.hero.primary.href}>
              {site.hero.primary.label}
              <ArrowLeftIcon className="btn__icon" />
            </a>
            <a className="btn btn--ghost" href={site.hero.secondary.href}>
              {site.hero.secondary.label}
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <span className="hero__meta-dot" aria-hidden="true" />
              برای خانه و محل کار
            </span>
            <span className="hero__meta-item">
              <span className="hero__meta-dot" aria-hidden="true" />
              فیلتر اصلی و جایگزین
            </span>
            <span className="hero__meta-item">
              <span className="hero__meta-dot" aria-hidden="true" />
              راهنمای انتخاب فیلتر
            </span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__halo" aria-hidden="true" />
          <SystemArt variant="undersink" className="hero__art" />
          <span className="hero__droplet hero__droplet--one" aria-hidden="true" />
          <span className="hero__droplet hero__droplet--two" aria-hidden="true" />
          <span className="hero__caption">{site.hero.asideCaption}</span>
        </div>
      </div>

      <a className="hero__scroll" href="#trust">
        <span className="hero__scroll-line" aria-hidden="true" />
        {site.hero.scrollCue}
      </a>
    </section>
  );
}
