import { SETACTIVE, ADDITEMTOCART, REMOVEITEMFROMCART } from "../Actions/index";

export const setActive = (state = 0, action) => {
  if (action.type === SETACTIVE) {
    return action.payload.id;
  }

  return state;
};
// making cart reducer
export const cart = (state = [], action) => {
  if (action.type === ADDITEMTOCART) {
    const id = action.payload.id;
    const filteredArray = state.filter((item) => item.id !== id);
    const numberOfItems = action.payload.numberOfItems;
    // checking if there exist an element to increase its numbers property
    const existingElement = state.find((item) => item.id === id);
    // we will exclude our element to avoid any errors
    if (existingElement) {
      // now we will increase the number of our cart item
      existingElement.numberOfItems++;
      return [...filteredArray, existingElement];
    }
    return [...state, { id, numberOfItems }];
  }
  if (action.type === REMOVEITEMFROMCART) {
    const id = action.payload.id;
    const filteredArray = state.filter((item) => item.id !== id);
    const theElementToRemove = state.find((item) => item.id === id);
    const theRemovedElement = {
      id,
      numberOfItems: theElementToRemove.numberOfItems - 1,
    };
    return [...filteredArray, theRemovedElement];
  }
  return state;
};
export const totalPrice = (state = 0, action) => {
  switch (action.type) {
    case ADDITEMTOCART:
      return state + action.payload.price;
    case REMOVEITEMFROMCART:
      return state - action.payload.price;
    default:
      return state;
  }
};
