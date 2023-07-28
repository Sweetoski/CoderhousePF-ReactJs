import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css";


const Navbar = (props) => {
    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <Link to={"/productos"}>
                    <li className="hover-overline"><img src={props.img} alt="logo-navbar" /></li>
                </Link>


                <li role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </li>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to={"/productos/Accesorios"}>
                        <li className="navbar-item hover-overline color-link">Accesorios</li>
                    </Link>

                    <Link to={"/productos/Refacciones"}>
                        <li className="navbar-item hover-overline color-link">Refacciones</li>
                    </Link>

                    <Link to={"/productos/Liquidos y Quimicos"}>
                        <li className="navbar-item hover-overline color-link">Liquidos y Quimicos</li>
                    </Link>

                    <Link to={"/contacto"}>
                        <li className="navbar-item hover-overline color-link">Contacto</li>
                    </Link>


                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <li className="button">
                                <i className="fa-sharp fa-solid fa-user logo-usuario"></i>
                            </li>
                            <li>
                                <CartWidget />
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar