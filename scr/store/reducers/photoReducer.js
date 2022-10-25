import { photoTypes } from "../types";

const {ADD_PHOTO, SET_PHOTO} = photoTypes

const initialState = {
    photos: [],
}

const PhotosReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_PHOTO:
            return{
                photos: [...state.photos,{image: action.image, id: action.id}]
            }
        case SET_PHOTO:
            console.log(action.loadphoto)
            return state

        default:
            return state
    }
    
}

export default PhotosReducer;

