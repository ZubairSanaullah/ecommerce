import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RotateCcw, Sparkles, Search, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { MdOutlineMail } from "react-icons/md";
import './Home.css';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home" id="home-page">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-content">
          <span className="hero-tag">
            <Sparkles size={14} /> New Collection 2026
          </span>
          <h1 className="hero-title">
            Discover <span className="gradient-text">Premium</span> Products
          </h1>
          <p className="hero-subtitle">
            Curated essentials designed for modern living. Explore our handpicked
            collection of premium products at unbeatable prices.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary" id="shop-now-btn">
              Shop Now <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="btn btn-outline" id="browse-btn">
              Browse Categories
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow"></div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section" id="trust-section">
        <div className="trust-item">
          <div className="trust-icon"><Truck size={24} /></div>
          <div>
            <strong>Free Shipping</strong>
            <p>On orders over $50</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon"><Shield size={24} /></div>
          <div>
            <strong>Secure Payment</strong>
            <p>256-bit SSL encryption</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon"><RotateCcw size={24} /></div>
          <div>
            <strong>Easy Returns</strong>
            <p>30-day return policy</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section" id="featured-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="section-link">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Extra Services */}
      <section className='extra-services'>
        <div className='extra-services-header'>
          <h2>Our extra services</h2>
        </div>
        <div className='extra-services-grid'>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/1.png" alt="1" className="extra-service-img" />
            <div className="extra-service-icon">
              <Search size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Source from Industry Leaders</h3>
            </div>
          </div>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/2.png" alt="2" className="extra-service-img" />
            <div className="extra-service-icon">
              <Package size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Customize Your Products</h3>
            </div>
          </div>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/3.png" alt="3" className="extra-service-img" />
            <div className="extra-service-icon">
              <Truck size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Fast, reliable shipping by ocean and air</h3>
            </div>
          </div>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/4.png" alt="4" className="extra-service-img" />
            <div className="extra-service-icon">
              <Shield size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Product monitoring and inspection</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="suppliers-section">
        <div className="suppliers-header">
          <h2>Suppliers by region</h2>
        </div>
        <div className="suppliers-grid">
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/AE@2x.png" alt="AE" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Arabic Emirates</h3>
              <p>zubayrstore.ae</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/icon.png" alt="AU" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Australia</h3>
              <p>zubayrstore.com.au</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/US@2x.png" alt="US" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>United States</h3>
              <p>zubayrstore.com</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/RU@2x.png" alt="RU" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Russia</h3>
              <p>zubayrstore.ru</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/IT@2x.png" alt="IT" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Italy</h3>
              <p>zubayrstore.it</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/DK@2x.png" alt="DK" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Denmark</h3>
              <p>zubayrstore.dk</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/FR@2x.png" alt="FR" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>France</h3>
              <p>zubayrstore.fr</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/DE@2x.png" alt="DE" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Germany</h3>
              <p>zubayrstore.de</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/GB@2x.png" alt="GB" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Great Britain</h3>
              <p>zubayrstore.co.uk</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/CN@2x.png" alt="CN" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>China</h3>
              <p>zubayrstore.cn</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="cta-section">
        <div className="cta-content">
          <h2>Subscribe to our newsletter</h2>
          <p>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="cta-input-wrap">
            <input type="email" placeholder="Email" className="cta-input" id="cta-email-input" />
            <button className="btn btn-primary" id="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
