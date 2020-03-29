/*
This file simplifies calling user actions. 
Instead of having to write the SET_CURRENT_USER string anywhere we use that action,
    we just access the value that points to that string.
The advantage of this is that it reduces the potential for typos in our code 
*/

export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}