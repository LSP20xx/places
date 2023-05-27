import { createStore, combineReducers } from 'redux';

import { placesReducer } from './reducers/index';
import { categoriesReducer } from './reducers/index';

const rootReducer = combineReducers({
    places: placesReducer,
    categories: categoriesReducer,
});

export default createStore(rootReducer);