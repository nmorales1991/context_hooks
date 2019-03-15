import React, { useReducer } from "react";
import { ciudadReducer } from "./reducer";
import { setCity } from "./action";
import GlobalState from "./GlobalState";

const ProviderState = (props) => {//este componente será el que englobe todos los componentes que necesiten este contexto
    const ciudades = [
        "Talca,cl",
        "San Carlos,cl",
        "Santiago,cl",
        "Paris",
        "Roma",
        "Barcelona",
        "Bogota",
        "Lima"
    ];
    const [stateCiudades, dispatch] = useReducer(ciudadReducer, {
        ciudadEscogida: "Talca,cl"
    });//se usa el hook useReducer el cual permite realizar un dispatch a un reducer. el primer parámetro es el reducer a ocupar, el segundo parámetro es el estado inicial. Este hook devuelve el estado actual y el método dispatch

    const seleccionarCiudad = ciudad => {//se crea una función que hace un dispatch al reducer, enviandole una ciudad
        dispatch(setCity(ciudad));
    };
    return (
        <GlobalState.Provider
            value={{
                ciudades,
                cambiarCiudad: seleccionarCiudad,
                ciudadActual: stateCiudades.ciudadEscogida
            }}
        >
           {props.children}
        </GlobalState.Provider>
    );//se envuelven los hijos de este componente, pasándole el context como Provider, en los valores irán el listado de ciudades, la función para cambiar ciudad, y la ciudad actual
};

export default ProviderState;
