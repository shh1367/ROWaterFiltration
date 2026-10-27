import { site } from '../data/content.js';
import { InfoIcon } from './Icons.jsx';

const faNumbers = ['۱', '۲', '۳', '۴'];

export default function HowItWorks() {
  const { how } = site;

  return (
    <section className="section how" id="technology" aria-labelledby="how-title">
      <div className="shell">
        <div className="how__head reveal">
          <span className="eyebrow eyebrow--light">{how.eyebrow}</span>
          <h2 className="title-lg" id="how-title">
            {how.title}
          </h2>
          <p className="lede lede--light">{how.description}</p>
        </div>

        <ol className="steps">
          {how.steps.map((step, index) => (
            <li
              className="step reveal"
              key={step.title}
              style={{ '--reveal-delay': `${index * 110}ms` }}
            >
              <span className="step__num" aria-hidden="true">
                {faNumbers[index]}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="how__note">
          <InfoIcon />
          <span>{how.note}</span>
        </p>
      </div>
    </section>
  );
}
