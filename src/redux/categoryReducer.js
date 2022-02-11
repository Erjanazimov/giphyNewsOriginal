import {CATEGORY_GET, CATEGORY_INSIDE, NULL_CATEGORY} from "./type";


const initialState = {
    categories: [],
    insideCategory: [],
    name: ""
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type){
        case CATEGORY_GET:
            return {
                ...state,
                categories: action.data
            }
        case CATEGORY_INSIDE:
            return {
                ...state,
                insideCategory: action.data,
                name: action.name
            }
        case NULL_CATEGORY:
            return {
                ...state,
                insideCategory: []
            }
        default:
            return state;
    }
}