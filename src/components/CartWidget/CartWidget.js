import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css"

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className="menu-link button" to="/carrito">
                <i className="bi bi-cart-fill color-cart"></i>
                <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget