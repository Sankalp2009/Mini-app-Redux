const InitialState = {
  isLoading: false,
  isError: null,
  data: [],
}
const reducer = (currentState = InitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'Get_Request':
      return {
        ...currentState,
        isLoading: true,
      }

    case 'Get_Success':
      return {
        ...currentState,
        isLoading: false,
        data: payload.product_data
      }

    case 'Get_Failure':
      return {
        ...currentState,
        data: [],
        isError: payload.error,
      }

    default:
      return currentState
  }
}

export { reducer }
