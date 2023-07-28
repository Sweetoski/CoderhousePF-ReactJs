import React from 'react'
import "./ItemCount.css";

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

  return (
    <div>
      <div className="Controls">
        <button className='Button' onClick={handleRestar}>-</button>
        <p className='Number'>{cantidad}</p>
        <button className='Button' onClick={handleSumar}>+</button>
      </div>
      <div className='agregar-carrito'>
        <button className='Button' onClick={handleAgregar}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount