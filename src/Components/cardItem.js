import React, { useState, useEffect } from 'react';
import { getById } from '../api/products';

const CartItem = props => {
    const {id, numberOfItems} = props;
    const [item, setItem] = useState(null);
    useEffect(()=>{
        getById(id).then(item => setItem(item));
    },[]);
    const renderTheItem = () => {
        if(!item){
            return <h1> you havn't any products yet</h1>
        }
        const itemTotalPrice = item.price * numberOfItems;

        return (
            
            <div className="card col-4 " >
                <h1> the number of Items is {numberOfItems}</h1>
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"> the total price for the number of items is: {itemTotalPrice}.0$</p>
                </div>
             </div>
        )
    }
    return (
        <div>
            { renderTheItem()}
        </div>
    )
}
export default CartItem;