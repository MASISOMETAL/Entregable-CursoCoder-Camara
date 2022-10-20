import { database } from "../../components/database";
import { ofertaTypes } from "../types";

const {SELECT_OFERTA} = ofertaTypes;

const initialState = {
    database : database,
    selected: null
 }
 
 const DatabaseReducer = (state = initialState, action) =>{
    switch (action.type) {
      case SELECT_OFERTA:

        return state

      default:
         return state
    }

 }

 export default DatabaseReducer;