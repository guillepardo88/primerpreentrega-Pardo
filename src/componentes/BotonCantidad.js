import React, {useState} from "react";

const BotonCantidad = () => {

    const [contador, setContador] = useState(0);

    const sumaClick = () => {   

        setContador(contador + 1);
    }

    const restaClick = () => {

        setContador(contador - 1);

    }

    const resetearClick = () => {

        setContador(0);
    }

    return(
    <>
        <h1>{contador}</h1>
        <button onClick={sumaClick}>+</button>
        <button onClick={restaClick}>-</button>
        <button onClick={resetearClick}>Reseteo</button>
    </>
    );
};

export default BotonCantidad;