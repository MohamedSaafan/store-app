import React, { useEffect } from 'react';
import CardItem from '../Components/cardItem';
import CartItem from '../Components/cardItem';
import { connect } from 'react-redux';
import { getById } from '../api/products';
const Cart = (props)=>{
    const {cart} = props;
    let cartItems = [];

    const renderItems = () => {
      return  cart.map(item => {
            return(
                <CartItem id = {item.id} numberOfItems = {item.numberOfItems} key = {item.id} />
                );
        })
    }


    return(

        <div>
            <h2>Your total Price of All Products is: {props.totalPrice}$</h2>
            {cart.length? renderItems(): <h1> you have no items in your cart</h1>}
        </div>
    );
}
const mapStateToProps = state => {
    return{
        cart: state.cartItems,
        totalPrice: state.totalPrice,
    }
}
 export default connect(mapStateToProps, null)(Cart);