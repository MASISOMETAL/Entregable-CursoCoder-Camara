import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { PhotosReducer, DatabaseReducer } from "./reducers";

const rootReducer = combineReducers({
    databaseStore: DatabaseReducer,
    photoReducer: PhotosReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));