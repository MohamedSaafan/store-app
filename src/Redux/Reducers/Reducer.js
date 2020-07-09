import {SETACTIVE, ADDITEMTOCART} from '../Actions/SETACTIVE';

export const setActive = (state = 0, action)=> {
    if(action.type === SETACTIVE){
        return action.payload.id ;
    }
        
    return state;
}
// making cart reducer
export const cart = (state = [], action)=> {
    switch (action.type){
        case ADDITEMTOCART:
            const id = action.payload.id;
            const numberOfItems = action.payload.numberOfItems;
            // checking if there exist an element to increase its numbers property
            const existingElement = state.find(item => item.id === id);
            // we will exclude our element to avoid any errors
            const filteredArray = state.filter(item => item.id !== id);
            if(existingElement){
                // now we will increase the number of our cart item
                existingElement.numberOfItems++;
                return [...filteredArray, existingElement]
            }
            return[...state, {id, numberOfItems}];
        default:
            return state;
    }
}