import React, { useContext } from "react";
import GlobalState from "../context/GlobalState";

const CiudadActual = () => {
    const context = useContext(GlobalState);
    return (
        <div>
            {context.ciudadActual}
        </div>
    );
};

export default CiudadActual;