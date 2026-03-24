import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RotateCcw, Sparkles } from 'lucide-react';
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
