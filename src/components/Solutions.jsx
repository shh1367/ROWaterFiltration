import { site } from '../data/content.js';
import { ArrowLeftIcon } from './Icons.jsx';
import SystemArt from './art/SystemArt.jsx';

export default function Solutions() {
  const { solutions } = site;

  return (
    <section className="section solutions" aria-labelledby="solutions-title">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">راهکارها</span>
          <h2 className="title-lg" id="solutions-title">
            {solutions.title}
          </h2>
        </div>

        <div className="solutions__grid">
          {solutions.items.map((item, index) => (
            <article
              className="solution-card reveal"
              key={item.title}
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              <SystemArt
                variant={item.art === 'business' ? 'rack' : 'undersink'}
                className="solution-card__art"
              />
              <div className="solution-card__body">
                <h3 className="solution-card__title">{item.title}</h3>
                <p className="solution-card__text">{item.text}</p>
                <a className="btn btn--ghost btn--sm" href={item.cta.href}>
                  {item.cta.label}
                  <ArrowLeftIcon className="btn__icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
