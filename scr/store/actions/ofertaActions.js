import { ofertaTypes } from "../types";

const { SELECT_OFERTA } = ofertaTypes;

export const selectOferta = (id) =>({
    type: SELECT_OFERTA,
    dataid: id
})