import { createSelector } from 'reselect';

const selectCart = state => state.cart; // input selector

// Memoized selector
export const selectCartItems = createSelector(
    [selectCart],               // array of input selectors
    (cart) => cart.cartItems    // function returning the value from the selector
);

// Returns the total quantity of all the cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems], // Uses the portion of state generated in another output selector as the input
    cartItems =>
    cartItems.reduce( // Starts from 0 and adds the quantity of cartItem to the accumulatedQuantity value
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
);