import React, { useContext } from "react";
import GlobalState2 from "../context/GlobalState2";

const AlimentoActual = () => {
    const context = useContext(GlobalState2);
    return (
        <div>
            {context.alimentoActual}
        </div>
    );
};

export default AlimentoActual;