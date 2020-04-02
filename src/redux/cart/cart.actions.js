import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({        // No payload required for this action
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});