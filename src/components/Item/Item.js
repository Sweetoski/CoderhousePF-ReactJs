import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({ producto }) => {
    return (
        <div className="producto">

            <article className='CardItem'>
                <header>
                    <h4 className='ItemHeader'>{producto.titulo}</h4>
                </header>
                <picture>
                    <img className='ItemImg' src={producto.imagen} alt={producto.titulo} />
                </picture>
                <section className='card-content'>
                    <p>Precio: ${producto.precio}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Stock disponible: {producto.stock}</p>
                </section>
                <div>
                    <Link className="ver-mas" to={`/item/${producto.id}`}>
                        <button className="ItemButton">Ver Detalle</button>
                    </Link>
                </div>
            </article>

        </div>
    )
}

export default Item