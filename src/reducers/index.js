import {  combineReducers  } from 'redux';
import { showDrinks } from '../actions/drinks';

const rootReducer = combineReducers({
    drinks: showDrinks
});

export default rootReducer;