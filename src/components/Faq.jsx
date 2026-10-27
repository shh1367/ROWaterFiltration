import { useState } from 'react';
import { site } from '../data/content.js';

export default function Faq() {
  const { faq } = site;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="shell faq__grid">
        <div className="faq__aside reveal">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="title-lg" id="faq-title">
            {faq.title}
          </h2>
          <p className="faq__aside-note">
            پاسخ سؤال‌تان را پیدا نکردید؟ تیم پشتیبانی برای انتخاب دستگاه و فیلتر کنار شماست.
          </p>
          <a className="text-link" href="#contact">
            تماس با پشتیبانی
          </a>
        </div>

        <div className="faq-list">
          {faq.items.map((item, index) => {
            const open = index === openIndex;
            return (
              <div
                className="faq-item reveal"
                key={item.q}
                data-open={open}
                style={{ '--reveal-delay': `${index * 60}ms` }}
              >
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    id={`faq-button-${index}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-question__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                >
                  <div className="faq-answer__inner">
                    <p className="faq-answer__text">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
