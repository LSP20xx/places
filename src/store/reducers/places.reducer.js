import { PLACES } from '../../constants/data/places';
import { placesTypes } from '../types';
const { SELECT_PLACE, FILTER_PLACES } = placesTypes;


const initialState = {
    data: PLACES,
    selected: null,
    filteredPlaces: [],
}    

const placesReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_PLACE:
            const indexPlace = state.data.findIndex((place) => place.id === action.placeId);
            if (indexPlace === -1) return state;
            return {
                ...state,
                selected: state.data[indexPlace],
            }
        case FILTER_PLACES:
            return {
                ...state,
                filteredPlaces: state.data.filter(place => place.categories.some(category => category === action.categoryName)),
            }
        default:
            return state;
    }
    
}

export default placesReducer;