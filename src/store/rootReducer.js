import { combineReducers } from "redux";
import { positions } from "./positions/positionReducer";

export const rootReducer = combineReducers({positions});
