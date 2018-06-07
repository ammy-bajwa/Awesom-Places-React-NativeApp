export const addPlace = (placeName) => ({
    type:"ADD_PLACE",
    placeName
})
export const closeModal = () => ({
    type:"MODAL_CLOSE"
})
export const placeClick = (place) => ({
    type:"PLACE_CLICK",
    place
})
export const deletePlace = () => ({
    type:"DELETE_PLACE"
})