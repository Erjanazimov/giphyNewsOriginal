import {combineReducers} from "redux";
import {trendingReducer} from "./trendingReducer";
import {categoryReducer} from "./categoryReducer";
import {randomReducer} from "./randomReducer";

export const rootReducer =combineReducers({
    trendingReducer,
    categoryReducer,
    randomReducer
})