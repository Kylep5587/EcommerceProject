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
};


/* Removes an item from the cart or reduces
    the quantity of an item in the cart
***********************************************/
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(                        // Searches cartItems array for a match to the cartItemToRemove.id; Sets cartItem to theat id if found 
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {  // Executes only when the item quantity is 1 and removes the item from the cart
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) // Returns a new array with all the cartItem elements minus the item with the matching id
    }

    return cartItems.map(                                   // iterates through all cart items in the array
        cartItem => cartItem.id === cartItemToRemove.id ?   // checks if the item matches the id we want to remove
        { ...cartItem, quantity: cartItem.quantity - 1}     // if matches id, reduce quantity of that item by 1
        : cartItem                                          // if item doesn't match the id, keep same quantity
    );
};