import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { placesReducer, categoriesReducer, favoritesReducer, authReducer } from './reducers/index';

const rootReducer = combineReducers({
    places: placesReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));