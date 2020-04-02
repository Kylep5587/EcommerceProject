import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return { ...state,  hidden: !state.hidden }; // sets hidden to the opposite value that it currently is
        default:
            return state;
    }
}

export default cartReducer;