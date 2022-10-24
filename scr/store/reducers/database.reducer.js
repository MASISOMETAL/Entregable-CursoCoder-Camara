import { datebase } from "../../components/datebase";
import { ofertaTypes } from "../types";

const {SELECT_OFERTA} = ofertaTypes;

const initialState = {
    datebase : datebase,
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