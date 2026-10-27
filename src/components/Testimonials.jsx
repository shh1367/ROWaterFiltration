import { site } from '../data/content.js';
import { ChatIcon } from './Icons.jsx';

export default function Testimonials() {
  const { testimonials } = site;

  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="title-md" id="testimonials-title">
            {testimonials.title}
          </h2>
        </div>

        <div className="testimonial-placeholder reveal">
          <span className="testimonial-placeholder__icon">
            <ChatIcon />
          </span>
          <p className="testimonial-placeholder__text">{testimonials.text}</p>
        </div>
      </div>
    </section>
  );
}
