import React from "react";
import logo from "../img/logo.png"
import carrito from "../img/carrito.png"
import "../componentes/estilos/Header.css"

const Header = ({children}) => {
    return (
        <div className="contenedor"> 
            <img src={logo} alt="logo tienda" />
            <h1>Electro Boom</h1>
            {children}
            <nav>
                <ul>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
            <img src={carrito} alt="carritoCompras" />
            <span>0</span>
        </div>
    )
}

export default Header