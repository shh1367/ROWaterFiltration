import { site } from '../data/content.js';
import { ArrowLeftIcon, SupportIcon } from './Icons.jsx';

export default function FilterCallout() {
  const { filterCallout } = site;

  return (
    <section className="filter-callout" aria-labelledby="filter-callout-title">
      <div className="shell">
        <div className="filter-callout__panel reveal">
          <div className="filter-callout__copy">
            <h2 className="filter-callout__title" id="filter-callout-title">
              {filterCallout.title}
            </h2>
            <p className="filter-callout__text">{filterCallout.text}</p>
          </div>
          <div className="filter-callout__actions">
            <a className="btn btn--primary" href={filterCallout.primary.href}>
              {filterCallout.primary.label}
              <ArrowLeftIcon className="btn__icon" />
            </a>
            <a className="btn btn--ghost" href={filterCallout.secondary.href}>
              <SupportIcon className="btn__icon" />
              {filterCallout.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
