import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <Link to={`/product/${product.id}`} className="product-card-image-link">
        <div className="product-card-image-wrap">
          <img src={product.image} alt={product.name} className="product-card-image" loading="lazy" />
          {product.badge && <span className="product-card-badge">{product.badge}</span>}
          {discount > 0 && <span className="product-card-discount">-{discount}%</span>}
        </div>
      </Link>

      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-card-name">
          {product.name}
        </Link>

        <div className="product-card-rating">
          <Star size={14} fill="#f59e0b" stroke="#f59e0b" />
          <span className="rating-value">{product.rating}</span>
          <span className="rating-count">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="product-card-footer">
          <div className="product-card-prices">
            <span className="product-card-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="product-card-original">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button
            className="product-card-cart-btn"
            id={`add-to-cart-${product.id}`}
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
