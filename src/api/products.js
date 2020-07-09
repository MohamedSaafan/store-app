import Products from './api.json'
export  const api = ()=>{
    return Promise.resolve(Products);
}
export const getById = (id) =>{
    return Promise.resolve((Products.find((item)=> item.id === +id)));
}