import {  combineReducers  } from 'redux';
import { showDrinks } from '../actions/drinks';

const rootReducer = combineReducers({
    drink: showDrinks
});

export default rootReducer;