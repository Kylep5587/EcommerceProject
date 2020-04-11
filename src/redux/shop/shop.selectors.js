import { createSelector } from 'reselect';

const selectShop = state => state.shop; // input selector to get initial shop state

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)