import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return { ...state,  hidden: !state.hidden }; // sets hidden to the opposite value that it currently is
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload] // adds existing array values and the new values to the array
            };
        default:
            return state;
    }
}

export default cartReducer;