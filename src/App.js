import React from "react";
import ProviderState from "./context/ProviderState";
import ProviderState2 from "./context/ProviderState2";
import Botones from "./components/Botones";
import BotonesAlimento from "./components/BotonesAlimento";
import AlimentoActual from "./components/AlimentoActual";
import CiudadActual from "./components/CiudadActual";

const App = () => {
    return (
        <React.Fragment>
            <ProviderState>
                <Botones />
                <CiudadActual />
            </ProviderState>
            <ProviderState2>
                <BotonesAlimento />
                <AlimentoActual />
            </ProviderState2>
        </React.Fragment>
    ); //ProviderState engloba todos sus hijos con el context
};

export default App;
