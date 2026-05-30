const InitialState = {
  cart_data: [],
}
const reducer = (currentState = InitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'Add_Cart': {
      const product = payload

      const duplicates = currentState.cart_data.some((item) => item.id === product.id)

      if (duplicates) return currentState

      return {
        ...currentState,
        cart_data: [...currentState.cart_data, payload],
      }
    }

    case 'Remove_Cart':
      return {
        ...currentState,
        cart_data: currentState.cart_data.filter((item) => item.id !== payload),
      }

    default:
      return currentState
  }
}

export { reducer }
