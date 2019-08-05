import {
FETCHING_START,
FETCHING_SUCCESS,
FETCHING_FAILED
} from '../actions/types'

const initialState = {
    isloading: false,
    list: [],
    error:false,
};


export function showDrinks ( state = initialState, action ){
    const { type, payload } = action;
    switch (type){
        case FETCHING_START:
            return Object.assign({}, state, { isloading: true , error: false });
        case FETCHING_SUCCESS:
            return Object.assign({}, state, { isloading: false , list: payload, error: false });
        case FETCHING_FAILED:
            return Object.assign({}, state, { isloading: false , error: true });
        default:
            return state;
    }
}
