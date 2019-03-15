import React, { useContext } from "react";
import GlobalState from "../context/GlobalState";//siempre que se necesite usar el contexto en otro componente se debe llamar al componente creador

const Botones = () => {
    const context = useContext(GlobalState);// acá se usa useContext que es un hook para tomar el contexto del provider más cercano y usarlo
    return (
        <React.Fragment>
            {context.ciudades.map((ciudad, i) => (//no es necesario usar Consumer como en el context api, con el hook useContext sólo se llama a la variable que se le asignó y se obtiene el contexto
                <button
                    onClick={() => context.cambiarCiudad(ciudad)}
                    key={i}
                    style={{ margin: "5px" }}
                >
                    {ciudad}
                </button>
            ))}
        </React.Fragment>
    );
};

export default Botones;
