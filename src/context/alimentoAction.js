export const SET_ALIMENTO = 'SET_ALIMENTO';
export const setAlimento = alimento=>{//se crea una función que hace un dispatch al reducer, enviandole una ciudad
    return { type: SET_ALIMENTO, payload: alimento }
};