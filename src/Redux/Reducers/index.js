import {setActive, cart} from './Reducer'
import {combineReducers} from 'redux';

 export default combineReducers ({
    activeId :setActive,
    cartItems: cart,
});
