import { placesTypes } from '../types';

const { SELECT_PLACE, FILTER_PLACES } = placesTypes;

export const selectPlace = (id) => ({
    type: SELECT_PLACE,
    placeId: id,
});

export const filterPlaces = (category) => ({
    type: FILTER_PLACES,
    categoryName: category,
});
