export const SET_CITY = 'SET_CITY';
export const setCity = ciudad=>{//se crea una función que hace un dispatch al reducer, enviandole una ciudad
    return { type: SET_CITY, payload: ciudad }
};