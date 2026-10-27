import { useState } from 'react';
import { site } from '../data/content.js';
import { LogoMark } from './Icons.jsx';

export default function Footer() {
  const { footer, brand } = site;
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('این فرم در نسخه نمایشی فعال نیست؛ پس از اتصال به فروشگاه، عضویت شما ثبت می‌شود.');
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home" aria-label={`${brand.name}، صفحه اصلی`}>
              <LogoMark className="brand__mark" />
              <span className="brand__text">
                <span className="brand__name">{brand.name}</span>
                <span className="brand__tagline">{brand.tagline}</span>
              </span>
            </a>
            <p className="footer-brand__text">{footer.description}</p>

            <div className="footer-brand__contact">
              {footer.contact.items.map((item) => (
                <span className="footer-contact__item" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <ul className="social-list">
              {footer.social.map((item) => (
                <li key={item.label}>
                  <a className="social-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <nav className="footer-col" key={column.title} aria-label={column.title}>
              <h2 className="footer-col__title">{column.title}</h2>
              <ul className="footer-col__list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer-col">
            <h2 className="footer-col__title">{footer.newsletter.title}</h2>
            <div className="newsletter">
              <p className="newsletter__text">{footer.newsletter.text}</p>
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="newsletter-email">
                  {footer.newsletter.placeholder}
                </label>
                <input
                  id="newsletter-email"
                  className="newsletter__input"
                  type="email"
                  name="email"
                  required
                  placeholder={footer.newsletter.placeholder}
                  autoComplete="email"
                />
                <button type="submit" className="newsletter__button">
                  {footer.newsletter.button}
                </button>
              </form>
              <p className="newsletter__note" role="status">
                {status || footer.newsletter.note}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <div className="footer-legal">
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
