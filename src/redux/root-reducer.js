/*
Combines all the reducers into a single reducer
Handles the state for the entire application
The keys in combineReducers represent the individual reducers
combineReducers will combine each reducer into a single object
*/

import { combineReducers } from 'redux';        // Imports the required method
import userReducer from './user/user.reducer';  // Imports the user reducer

export default combineReducers({
    user: userReducer
});