import React, { useReducer } from "react";
import { alimentoReducer } from "./alimentoReducer";
import { setAlimento } from "./alimentoAction";
import GlobalState2 from "./GlobalState2";

const ProviderState2 = (props) => {//este componente será el que englobe todos los componentes que necesiten este contexto
    const alimentos = [
        "Plátano",
        "Sandía",
        "Pan",
        "Choclo",
        "Carne",
        "Papas"
    ];
    const [stateAlimentos, dispatch] = useReducer(alimentoReducer, {
        alimentoEscogido: "Pan"
    });//se usa el hook useReducer el cual permite realizar un dispatch a un reducer. el primer parámetro es el reducer a ocupar, el segundo parámetro es el estado inicial. Este hook devuelve el estado actual y el método dispatch

    const seleccionarAlimento = alimento => {//se crea una función que hace un dispatch al reducer, enviandole una ciudad
        dispatch(setAlimento(alimento));
    };
    return (
        <GlobalState2.Provider
            value={{
                alimentos,
                cambiarAlimento: seleccionarAlimento,
                alimentoActual: stateAlimentos.alimentoEscogido
            }}
        >
           {props.children}
        </GlobalState2.Provider>
    );//se envuelven los hijos de este componente, pasándole el context como Provider, en los valores irán el listado de ciudades, la función para cambiar ciudad, y la ciudad actual
};

export default ProviderState2;
