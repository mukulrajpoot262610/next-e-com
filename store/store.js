import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { userReducer } from './reducers/userReducer'
import { profileReducer } from './reducers/profileReducer'

const reducer = combineReducers({
    currentUser: userReducer,
    currentProfile: profileReducer
})

const INITIAL_STATE = {}

const middleware = [thunk]

const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)))

export default store