import React from 'react';
import {useState,useEffect} from 'react';
import {getById,api} from '../api/products';
import ProductItem from '../Components/ProductsItem'


export  const Product = (props) =>{
     const {itemId} = props;
    return(
        <div>
            hello from products
            {JSON.stringify(props)}
            <ProductItem id = {itemId.id} key = {itemId.id} title = {itemId.name} price = {itemId.price} src = {itemId.image} />
        </div>
    )
}