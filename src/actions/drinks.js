import  drinkService  from '../provider/services';

import {
FETCHING_START,
FETCHING_SUCCESS,
FETCHING_FAILED
} from './types';

export  function showDrinks () {
    return async(dispatch , getState) => {
        try {
        const drinksState = getState().drinks.toObject();    
        dispatch ( {type: FETCHING_START} );
            if(!drinksState.isloading){
                const data = await drinkService();
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