import { combineReducers } from "redux";
import {changeLikeReducer} from "./changeLikeReducer"

export const rootReducer = combineReducers({
    changeLikeReducer,
});