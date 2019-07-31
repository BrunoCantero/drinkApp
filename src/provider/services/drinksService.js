import {URL_API} from '../../../config';

export async function drinkService() {
     const response = await fetch (URL_API);
     const data = await response.json();
     return data;
 }