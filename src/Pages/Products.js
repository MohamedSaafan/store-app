import React,{useState,useEffect} from 'react';
import ProductItem from '../Components/ProductsItem';
import {api} from '../api/products';

export const Products = (props)=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
      api().then(items=> setItems(items))
    })

    return(
        <div>
            <h2>Products</h2>
            <div className = "row py-5">
                {items.map((item=>(
                    <ProductItem id = {item.id} key = {item.id} title = {item.name} price = {item.price} src = {item.image} />
                 ) ))}
                
            </div>
        </div>
         
        
    );
}
