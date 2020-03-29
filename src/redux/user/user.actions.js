/*
Stores the action creator functions
The action creator functions are functions which return objects
*/

import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // Matches the type expected in user.reducer.js swtich statement
    payload: user
});