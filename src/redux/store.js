import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // Stores all the middelwares in an array.

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;