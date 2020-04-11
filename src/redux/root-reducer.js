/*
Combines all the reducers into a single reducer
Handles the state for the entire application
The keys in combineReducers represent the individual reducers
combineReducers will combine each reducer into a single object
*/

import { combineReducers } from 'redux';            // Imports the required method
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';    // Tells redux-persist we want to use local storage

import userReducer from './user/user.reducer';  // Imports the user reducer
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',         // specifies at what point inside the reducer we want to start storing
    storage,             // references the storage location for redux-persist
    whitelist: ['cart']  // array containing the string name of any reducer we want to store
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); // Returns a modified version of the root reducer with persistent capabilities