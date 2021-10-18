import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { userReducer } from './reducers/userReducer'
import { productListReducer, productDetailReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { wishReducer } from './reducers/wishReducer'

const reducer = combineReducers({
    user: userReducer,
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    wish: wishReducer
})


const INITIAL_STATE = {
    cart: {
        cartItems: typeof window !== 'undefined' ? (localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []) : [],
        shippingAddress: typeof window !== 'undefined' ? (localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}) : {},
    }
}

const middleware = [thunk]

const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)))

export default store