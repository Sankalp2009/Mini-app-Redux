import { useSelector } from 'react-redux'
import CartPage from '../Components/CartPage'

function Cart() {
  const CartState = useSelector((state) => state.Cart)
  return (
    <div>
      <CartPage data={CartState?.cart_data} />
    </div>
  )
}

export default Cart
