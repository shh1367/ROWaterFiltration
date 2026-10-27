import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { site } from '../data/content.js';
import { toFaDigits } from '../lib/format.js';
import { CartIcon, CloseIcon, LogoMark, MenuIcon, SearchIcon, UserIcon } from './Icons.jsx';

export default function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchNote, setSearchNote] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchNote('جست‌وجوی فروشگاه پس از اتصال به ووکامرس فعال می‌شود.');
  };

  const cartLabel = cartCount
    ? `سبد خرید، ${toFaDigits(cartCount)} کالا`
    : 'سبد خرید، خالی';

  return (
    <header className="site-header">
      <div className="shell site-header__bar">
        <a className="brand" href="#home" aria-label={`${site.brand.name}، صفحه اصلی`}>
          <LogoMark className="brand__mark" />
          <span className="brand__text">
            <span className="brand__name">{site.brand.name}</span>
            <span className="brand__tagline">{site.brand.tagline}</span>
          </span>
        </a>

        <nav className="nav" aria-label="ناوبری اصلی">
          <ul className="nav__list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a className="nav__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn search-toggle"
            aria-expanded={searchOpen}
            aria-controls="site-search"
            onClick={() => setSearchOpen((open) => !open)}
          >
            <SearchIcon className="icon-btn__svg" />
            <span className="sr-only">جست‌وجوی محصولات</span>
          </button>

          <a className="icon-btn" href="#contact" aria-label="حساب کاربری">
            <UserIcon className="icon-btn__svg" />
          </a>

          <a className="icon-btn" href="#shop" aria-label={cartLabel}>
            <CartIcon className="icon-btn__svg" />
            {cartCount > 0 && (
              <span className="icon-btn__badge" aria-hidden="true">
                {toFaDigits(cartCount)}
              </span>
            )}
          </a>

          <a className="btn btn--primary btn--sm header-cta" href={site.headerCta.href}>
            {site.headerCta.label}
          </a>

          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon className="icon-btn__svg" />
            <span className="sr-only">باز کردن منو</span>
          </button>
        </div>
      </div>

      <div className="search-panel" id="site-search" data-open={searchOpen}>
        <div className="search-panel__inner">
          <div className="shell">
            <form className="search-form" role="search" onSubmit={handleSearch}>
              <div className="search-form__field">
                <SearchIcon className="icon-btn__svg" />
                <label className="sr-only" htmlFor="site-search-input">
                  جست‌وجوی محصولات
                </label>
                <input
                  id="site-search-input"
                  ref={searchInputRef}
                  className="search-form__input"
                  type="search"
                  placeholder="نام دستگاه یا فیلتر را بنویسید"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn--primary btn--sm">
                جست‌وجو
              </button>
            </form>
            <p className="search-form__note" role="status">
              {searchNote}
            </p>
          </div>
        </div>
      </div>

      {createPortal(
        <div className="mobile-menu" id="mobile-menu" data-open={menuOpen}>
        <div className="mobile-menu__scrim" onClick={closeMenu} aria-hidden="true" />
        <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="منوی اصلی">
          <div className="mobile-menu__head">
            <span className="brand">
              <LogoMark className="brand__mark" />
              <span className="brand__text">
                <span className="brand__name">{site.brand.name}</span>
              </span>
            </span>
            <button type="button" className="icon-btn" onClick={closeMenu}>
              <CloseIcon className="icon-btn__svg" />
              <span className="sr-only">بستن منو</span>
            </button>
          </div>

          <nav aria-label="ناوبری موبایل">
            <ul className="mobile-menu__list">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a className="mobile-menu__link" href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__footer">
            <a className="btn btn--primary" href="#shop" onClick={closeMenu}>
              {site.headerCta.label}
            </a>
            <div className="mobile-menu__actions">
              <button
                type="button"
                className="icon-btn"
                aria-label="جست‌وجوی محصولات"
                onClick={() => {
                  closeMenu();
                  setSearchOpen(true);
                }}
              >
                <SearchIcon className="icon-btn__svg" />
              </button>
              <a className="icon-btn" href="#contact" aria-label="حساب کاربری" onClick={closeMenu}>
                <UserIcon className="icon-btn__svg" />
              </a>
              <a className="icon-btn" href="#shop" aria-label={cartLabel} onClick={closeMenu}>
                <CartIcon className="icon-btn__svg" />
                {cartCount > 0 && (
                  <span className="icon-btn__badge" aria-hidden="true">
                    {toFaDigits(cartCount)}
                  </span>
                )}
              </a>
            </div>
          </div>
        </div>
        </div>,
        document.body
      )}
    </header>
  );
}
