import { Link } from 'react-router'
function ProductCard({ product }) {
  const { id, thumbnail, title, price, category } = product

  return (
    <div className="product-card">
      {/* Image */}

      <div className="product-image-wrapper">
        <img src={thumbnail} alt={title} className="product-image" />
      </div>

      {/* Content */}

      <div className="product-content">
        <Link data-testid="name" to={`/single/${id}`} className="product-title">
          {title}
        </Link>

        <h3>
          <span style={{ color: 'red' }}>Category</span>: {category}
        </h3>

        <p className="product-price">₹ {Math.floor(price)}</p>

        <button className="add-cart-btn">Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard