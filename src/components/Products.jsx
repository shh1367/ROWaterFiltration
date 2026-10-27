import { useState } from 'react';
import { site } from '../data/content.js';
import { ArrowLeftIcon, InfoIcon } from './Icons.jsx';
import CartridgeArt from './art/CartridgeArt.jsx';
import SystemArt from './art/SystemArt.jsx';

function ProductArt({ art }) {
  if (art === 'countertop') return <SystemArt variant="countertop" className="product-card__art" />;
  if (art === 'cartridge') return <CartridgeArt variant="pre" className="product-card__art" />;
  if (art === 'membrane') return <CartridgeArt variant="membrane" className="product-card__art" />;
  return <SystemArt variant="undersink" className="product-card__art" />;
}

export default function Products({ onAdd }) {
  const { products } = site;
  const [added, setAdded] = useState({});

  const handleAdd = (index, name) => {
    setAdded((current) => ({ ...current, [index]: true }));
    onAdd(name);
  };

  return (
    <section className="section products" id="products" aria-labelledby="products-title">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">{products.eyebrow}</span>
          <h2 className="title-lg" id="products-title">
            {products.title}
          </h2>
          <p className="lede">{products.description}</p>
        </div>

        <div className="product-grid">
          {products.items.map((item, index) => (
            <article
              className="product-card reveal"
              key={item.name}
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="product-card__media">
                <span className="product-card__badge">نمونه</span>
                <ProductArt art={item.art} />
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{item.name}</h3>
                <p className="product-card__detail">{item.detail}</p>
                <p className="product-card__price">{products.placeholderNote}</p>
                <div className="product-card__actions">
                  <button
                    type="button"
                    className="btn btn--primary btn--sm"
                    aria-label={`افزودن ${item.name} به سبد خرید`}
                    onClick={() => handleAdd(index, item.name)}
                  >
                    {added[index] ? 'افزوده شد' : 'افزودن به سبد'}
                  </button>
                  <a className="text-link product-card__link" href={item.href}>
                    مشاهده محصول
                    <ArrowLeftIcon className="btn__icon" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="products__note">
          <InfoIcon />
          <span>
            تصویر، قیمت و موجودی این کارت‌ها جای‌نگهدار است؛ پس از اتصال به فروشگاه، از کاتالوگ ووکامرس خوانده می‌شود.
          </span>
        </p>
      </div>
    </section>
  );
}
