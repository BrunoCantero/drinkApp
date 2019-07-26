const api = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';

export async function showDrinksConnected () {
    const response = await fetch(api);
    const data = await response.json();
    if (!data) throw new Error('error trayendo los tragos');
    return data;
}

