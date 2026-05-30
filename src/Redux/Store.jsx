import { legacy_createStore, combineReducers, compose } from 'redux'

// Reducers
import { reducer as Auth_Reducer } from './Auth_Reducer/Reducer'
import { reducer as Product_Reducer } from './Product_Reducer/Reducer'
import { reducer as Cart_Reducer } from './Cart_Reducer/Reducer'

// Root Reducer
const root_Reducer = combineReducers({
  Auth: Auth_Reducer,
  Product: Product_Reducer,
  Cart: Cart_Reducer,
})

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const store = legacy_createStore(root_Reducer, composeEnhancers())

export { store };