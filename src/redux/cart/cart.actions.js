import CartActionTypes from './cart.types';

/* Action for toggling the cart visibility
********************************************/
export const toggleCartHidden = () => ({        // No payload required for this action
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


/* Action for adding an item to the cart
- Gets the item to add and returns an action type object of ADD_ITEM
- Payload is set to the item content
********************************************/
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

/* Handles removal of a single item from the cart
*********************************************/
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

/* Used to remove an item from the user cart
*********************************************/
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});


