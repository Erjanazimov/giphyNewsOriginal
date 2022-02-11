import { TRENDING_GET} from "./type";


const initialState = {
    trendingData: [],
}

export const trendingReducer = (state = initialState, action) => {
    switch (action.type){
        case TRENDING_GET:
            return {
                ...state,
                trendingData: action.data
            }

        default:
            return state;
    }
}