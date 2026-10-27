import { site } from '../data/content.js';
import { ArrowLeftIcon } from './Icons.jsx';
import CartridgeArt from './art/CartridgeArt.jsx';
import FaucetArt from './art/FaucetArt.jsx';
import SystemArt from './art/SystemArt.jsx';

const artMap = {
  purifier: SystemArt,
  cartridge: CartridgeArt,
  faucet: FaucetArt,
};

function CategoryArt({ art }) {
  const Art = artMap[art] ?? SystemArt;
  return <Art className="category-card__art" />;
}

export default function Categories() {
  const { categories } = site;

  return (
    <section className="section categories" id="shop" aria-labelledby="categories-title">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">{categories.eyebrow}</span>
          <h2 className="title-lg" id="categories-title">
            {categories.title}
          </h2>
          <p className="lede">{categories.description}</p>
        </div>

        <div className="category-grid">
          {categories.items.map((item, index) => (
            <article
              className="category-card reveal"
              key={item.title}
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <div className="category-card__media">
                <CategoryArt art={item.art} />
              </div>
              <div className="category-card__body">
                <h3 className="category-card__title">{item.title}</h3>
                <p className="category-card__text">{item.description}</p>
                <a className="text-link category-card__link" href={item.href}>
                  مشاهده محصولات
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
