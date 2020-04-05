/*
Utility file used to store functions that may be needed in multiple files
Stores functions related to cart functionality
*/

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); // Searches array for the id and sets "existingCartItem" to that id, if found

    if (existingCartItem) {
        return cartItems.map(cartItem =>                            // Returns a new array containing each cartItem
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity +1 }       // Creates new object if IDs match
            : cartItem                                              // Returns original item if IDs don't match
        ) 
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]          // Attaches quantity property the first time the function is run
}