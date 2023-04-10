import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzaReducer} from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer } from './reducers/userReducer'
import {placeOrderReducer, getUserOrdersReducer} from './reducers/orderReducer'

const rootReducer = combineReducers({
    getAllPizzaReducer,
    cartReducer,
    registerUserReducer,
    loginUserReducer,
    placeOrderReducer,
    getUserOrdersReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: {
        cartItems
    },
    loginUserReducer: { 
        currentUser
    }
}

const middleWare = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store;
