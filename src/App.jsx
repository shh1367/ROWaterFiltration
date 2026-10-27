import { useState } from 'react';

import AnnouncementBar from './components/AnnouncementBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Story from './components/Story.jsx';
import Categories from './components/Categories.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Products from './components/Products.jsx';
import Solutions from './components/Solutions.jsx';
import FilterCallout from './components/FilterCallout.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';
import { toFaDigits } from './lib/format.js';

export default function App() {
  useReveal();
  const [cartCount, setCartCount] = useState(0);
  const [cartStatus, setCartStatus] = useState('');

  const handleAddToCart = (name) => {
    setCartCount((count) => count + 1);
    setCartStatus(`${name} به سبد خرید اضافه شد.`);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        پرش به محتوای اصلی
      </a>

      <AnnouncementBar />
      <Header cartCount={cartCount} />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Story />
        <Categories />
        <HowItWorks />
        <Products onAdd={handleAddToCart} />
        <Solutions />
        <FilterCallout />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <Footer />

      <p className="sr-only" role="status">
        {cartStatus && cartStatus + ` (${toFaDigits(cartCount)} کالا در سبد)`}
      </p>
    </>
  );
}
