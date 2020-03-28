/*
Stores the action creator functions
The action creator functions are functions which return objects
*/

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER', // Matches the type expected in user.reducer.js swtich statement
    payload: user
});