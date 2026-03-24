import { Link } from 'react-router-dom';
import { ShoppingCart, User, MessageSquare, Package, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <span className="logo-accent">ZUBAYR</span> STORE
        </Link>

        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="search-divider"></div>
          <select className="search-category" aria-label="Category">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
          </select>
          <button className="search-btn" aria-label="Search">
            Search
          </button>
        </div>

        <div className="navbar-actions">
          <Link to="/profile" className="navbar-action-item" id="profile-btn" aria-label="Profile">
            <User size={20} />
            <span className="navbar-action-label">Profile</span>
          </Link>
          <Link to="/messages" className="navbar-action-item" id="message-btn" aria-label="Messages">
            <MessageSquare size={20} />
            <span className="navbar-action-label">Message</span>
          </Link>
          <Link to="/orders" className="navbar-action-item" id="orders-btn" aria-label="Orders">
            <Package size={20} />
            <span className="navbar-action-label">Order</span>
          </Link>
          <Link to="/cart" className="navbar-action-item cart-btn" id="cart-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <span className="navbar-action-label">My Cart</span>
          </Link>
          <button
            className="navbar-icon-btn mobile-menu-btn"
            id="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
