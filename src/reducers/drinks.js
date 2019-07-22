import {
FETCHING_START,
FETCHING_SUCCESS,
FETCHING_FAILED
} from '../actions/types'

const initialState = {
    isloading: false,
    list: [],
    error:false
}


export function showDrinks ( state = initialState, action ){
    const { type, payload } = action;
    switch (type){
        case FETCHING_START:
            return state.set('isloading', true).set('error',false);
        case FETCHING_SUCCESS:
            return state
            .set('isloading',false)
            .set('list',payload);
        case FETCHING_FAILED:
            return state.set('isloading',false).set('error',true);
        default:
            return state;
    }
}