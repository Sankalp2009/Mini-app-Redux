const InitialState = {
  isAuth: false,
  isLoading: false,
  isError: null,
  token: null,
}
const reducer = (currentState = InitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'Login_Request':
      return {
        ...currentState,
        isLoading: true,
      }

    case 'Login_Success':
      return {
        ...currentState,
        isLoading: false,
        isAuth: true,
        token: payload.Token,
      }

    case 'Login_Failure':
      return {
        ...currentState,
        isAuth: false,
        token: null,
        isError: payload.error,
      }

    case 'Logout':
      return {
        ...currentState,
        isLoading: false,
        isAuth: false,
        token: null,
      }

    default:
      return currentState
  }
}

export { reducer }
