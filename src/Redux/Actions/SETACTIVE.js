export const SETACTIVE = 'SETACTIVE';
export const ADDITEMTOCART = 'ADDITEMTOCART';
export const action =(id)=>( {
    type:SETACTIVE,
    payload: {
        id
    }
}); 
export const addToCart = (id, numberOfItems, price)=>{
    return{
        type: ADDITEMTOCART,
        payload: {
            id,
            numberOfItems,
            price
        }
    }
}