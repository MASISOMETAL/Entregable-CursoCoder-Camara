import { photoTypes } from "../types";

const {ADD_PHOTO} = photoTypes

const initialState = {
    photos: [],
}

const PhotosReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_PHOTO:
        return{
            photos: [...state.photos,{image: action.image, id: action.image}]
        }

        default:
            return state
    }
    
}

export default PhotosReducer;

