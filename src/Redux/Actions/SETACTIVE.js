export const SETACTIVE = 'SETACTIVE';
export const ADDITEMTOCART = 'ADDITEMTOCART';
export const action =(id)=>( {
    type:SETACTIVE,
    payload: {
        id
    }
}); 
export const addToCart = (id, numberOfItems)=>{
    return{
        type: ADDITEMTOCART,
        payload: {
            id,
            numberOfItems
        }
    }
}