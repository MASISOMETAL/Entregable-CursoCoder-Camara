import { createStore, combineReducers } from "redux";
import DatabaseReducer from "./reducers/database.reducer";

const rootReducer = combineReducers({
    databaseStore: DatabaseReducer,
});

export default createStore(rootReducer);