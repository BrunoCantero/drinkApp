import axios from 'axios'

import {
FETCHING_START,
FETCHING_SUCCESS,
FETCHING_FAILED
} from './types';

const api = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';
export async function showDrinks () {
    return (dispatch , getState) => {
        try {
        const drinksState = getState ().drinks.toObject();    
        axios.get(api)
        .then ((response) =>{
            dispatch ( {type: FETCHING_START} );
            if(!drinksState.isloading){
                const list = response.data.drinks.map(drink =>({
                    id: drink.idDrink,
                    name: drink.strDrink,
                    photo: drink.strDrinkThumb,
                }));
                dispatch({ type: FETCHING_SUCCESS , payload: list });
            }
        })
    } catch (err) {
        dispatch({ type: FETCHING_FAILED });
    }
  };
}