import React from 'react';
import { createStore, combineReducers,compose } from 'redux';
import uuid from 'uuid';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const initialStoreState = {
    places: [],
    selectedPlace: null,
    modalVisible: false
}
const placesReducer = (state = initialStoreState, action) => {
    switch (action.type) {
        case 'ADD_PLACE':
            return {
                ...state,
                places: state.places.concat({
                    name: action.placeName, key: uuid(), image: {
                        uri: "https://www.swedishlapland.com/wp-content/uploads/storasjofallet_GRichardson.jpg"
                    }
                })
            }
        case 'MODAL_CLOSE':
            return {
                ...state,
                selectedPlace: null,
                modalVisible: false
            }
        case 'PLACE_CLICK':
            return {
                ...state,
                selectedPlace: action.place,
                modalVisible: true
            }
        case 'DELETE_PLACE':
            return {
                ...state,
                places: state.places.filter((place, index) => {
                    return place.key != state.selectedPlace.key
                }),
                modalVisible: false
            }
        default:
            return state
    }
}
const store = createStore(combineReducers(
    {
        places: placesReducer
    },
), composeEnhancers);

export default store;