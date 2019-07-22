import axios from 'axios'

import {
FETCHING_START,
FETCHING_SUCCESS,
FETCHING_FAILED
} from './types';

const api = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';
export  function showDrinks () {
    return async(dispatch , getState) => {
        try {
        const drinksState = getState ().drinks.toObject();    
        const response = await axios.get(api)
        dispatch ( {type: FETCHING_START} );
            if(!drinksState.isloading){
                const data =  response.data
                const list = data.drinks.map(drink =>({
                    id: drink.idDrink,
                    name: drink.strDrink,
                    photo: drink.strDrinkThumb,
                }));
                dispatch({ type: FETCHING_SUCCESS , payload: list });
            }
    } catch (err) {
        dispatch({ type: FETCHING_FAILED });
    }
  };
}