import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { userReducer } from './reducers/userReducer'
import { productListReducer, productDetailReducer } from './reducers/productReducer'

const reducer = combineReducers({
    user: userReducer,
    productList: productListReducer,
    productDetail: productDetailReducer
})

const INITIAL_STATE = {}

const middleware = [thunk]

const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)))

export default store