import { photoTypes } from "../types";
import { insertPhoto, getPhoto } from "../../db";

const {ADD_PHOTO, SET_PHOTO} = photoTypes

export const SavePhoto = ({id, imagePatch})  =>({
    type: ADD_PHOTO,
    image: imagePatch,
    id: id,
});

export const ImageSave = (imagePatch) => {
    return async (dispatch) => {
      try {
        const result = await insertPhoto(imagePatch);
        dispatch(SavePhoto( {id: result.insertId, imagePatch} ));
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };


export const setPhoto = (loadphoto) =>({
    type: SET_PHOTO,
    loadphoto: loadphoto,
});

export const LoadPhoto = () => {
    return async (dispatch) => {
      try {
        const result = await getPhoto();
        const loadphoto = result?.rows?._array;
        console.log(result?.rows?._array)
        dispatch(setPhoto(loadphoto));
      } catch (err) {
        throw err;
      }
    };
  };

