import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA // sets property to point to the shop data array in shop.data.js
}; 

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default shopReducer;