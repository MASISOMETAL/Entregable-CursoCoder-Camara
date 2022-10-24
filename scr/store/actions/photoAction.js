import { photoTypes } from "../types";

const {ADD_PHOTO} = photoTypes

export const SavePhoto = (imagePatch)  =>({
    type: ADD_PHOTO,
    image: imagePatch,
})

