import {RANDOM_GET} from "./type";


const initialState = {
    randomData: {},
}

export const randomReducer = (state = initialState, action) => {
    switch (action.type){
        case RANDOM_GET:
            const stateCopy = {
                ...state,
                randomData: {}
            }
            stateCopy.randomData = action.data;

            return stateCopy

        default:
            return state;
    }
}