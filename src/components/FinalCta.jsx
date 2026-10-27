import { site } from '../data/content.js';
import { ArrowLeftIcon } from './Icons.jsx';

export default function FinalCta() {
  const { finalCta } = site;

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="shell">
        <div className="final-cta__inner reveal">
          <h2 className="final-cta__title" id="final-cta-title">
            {finalCta.title}
          </h2>
          <p className="final-cta__text">{finalCta.text}</p>
          <a className="btn btn--primary" href={finalCta.cta.href}>
            {finalCta.cta.label}
            <ArrowLeftIcon className="btn__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
