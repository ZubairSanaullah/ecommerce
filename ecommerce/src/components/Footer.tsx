import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-accent">LUXE</span>STORE
          </Link>
          <p className="footer-tagline">Premium products, curated for you.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/products">All Products</Link>
            <Link to="/products?category=Electronics">Electronics</Link>
            <Link to="/products?category=Clothing">Clothing</Link>
            <Link to="/products?category=Accessories">Accessories</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Returns</a>
            <a href="#">Shipping</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuxeStore. All rights reserved.</p>
      </div>
    </footer>
  );
}
