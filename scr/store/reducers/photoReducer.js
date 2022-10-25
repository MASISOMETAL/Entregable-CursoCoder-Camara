import { photoTypes, PhotoSet } from "../types";

const {ADD_PHOTO} = photoTypes
const {SET_PHOTO} = PhotoSet

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
            //console.log(action.loadphoto)
            return {
                photos: action.loadphoto
            }

        default:
            return state
    }
    
}

export default PhotosReducer;

