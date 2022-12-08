import { combineReducers } from "redux";
import { positions } from "./positions/positionReducer";
import { filters } from "./filters/filtersReducer";

export const rootReducer = combineReducers({ positions, filters });
