import React, { useContext } from "react";
import GlobalState2 from "../context/GlobalState2";//siempre que se necesite usar el contexto en otro componente se debe llamar al componente creador

const BotonesAlimento = () => {
    const context = useContext(GlobalState2);// acá se usa useContext que es un hook para tomar el contexto del provider más cercano y usarlo
    return (
        <React.Fragment>
            {context.alimentos.map((alimento, i) => (//no es necesario usar Consumer como en el context api, con el hook useContext sólo se llama a la variable que se le asignó y se obtiene el contexto
                <button
                    onClick={() => context.cambiarAlimento(alimento)}
                    key={i}
                    style={{ margin: "5px" }}
                >
                    {alimento}
                </button>
            ))}
        </React.Fragment>
    );
};

export default BotonesAlimento;
