import {setActive, cart, totalPrice} from './Reducer'
import {combineReducers} from 'redux';

 export default combineReducers ({
    activeId :setActive,
    cartItems: cart,
    totalPrice,
});
