import CartCard from './CartCard'
function CartPage({ data = [] }) {
  
  const totalPrice = data?.reduce((acc, el) => {
    return acc + Math.floor(el.price)
  }, 0)

  return (
    <div className='CartOuter'>

      <h2>Total Price: $ {totalPrice}</h2>

      {
        data.map((el, arr) =>
          <CartCard
            key={el.id}
            arr={arr}
            product={el}
          />
        )
      }

    </div>
  )
}

export default CartPage
