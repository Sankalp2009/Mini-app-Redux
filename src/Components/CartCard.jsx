import { Trash } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Action_Type } from '../Redux/Cart_Reducer/Action'
function CartCard({ product }) {
  const dispatch = useDispatch()
  const { id, title, thumbnail, price } = product

  return (
    <div className="cartContainer">
      <div className="cartImage">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="cartContent">
        <h3>{title}</h3>
        <p>Price:$ {Math.floor(price)}</p>
      </div>

      <button
        className="deleteBtn"
        onClick={() => {
          dispatch({
            type: Action_Type.Remove_Cart,
            payload: id,
          })
        }}
      >
        <Trash size={20} />
      </button>
    </div>
  )
}

export default CartCard
