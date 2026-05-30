import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { Action_Type } from '../Redux/Cart_Reducer/Action'

function ProductCard({ product }) {
  const { id, thumbnail, title, price, category } = product
  const dispatch = useDispatch()

  const HandleClick = () => {
    dispatch({
      type: Action_Type.Add_Cart,
      payload: product,
    })
  }

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

        <button className="add-cart-btn" onClick={HandleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard