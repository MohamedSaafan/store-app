import React from 'react';
import CardItem from '../Components/cardItem';
import CartItem from '../Components/cardItem';
import { connect } from 'react-redux';
const Cart = (props)=>{
    const {cart} = props;

    const renderItems = () => {
      return  cart.map(item => {
            return(
                <CartItem id = {item.id} numberOfItems = {item.numberOfItems} />
                );
        })
    }


    return(
        <div>
            {cart.length? renderItems(): <h1> you have no items in your cart</h1>}
        </div>
    );
}
const mapStateToProps = state => {
    return{
        cart: state.cartItems,
    }
}
 export default connect(mapStateToProps, null)(Cart);