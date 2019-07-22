import {  combineReducers  } from 'redux';
import { showDrinks } from './drinks';

const rootReducer = combineReducers({
    drinks: showDrinks
});

export default rootReducer;