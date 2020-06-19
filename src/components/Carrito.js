import React from 'react';
import Producto from './Producto';
import './carrito.css';

const Carrito = ({carrito}) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
        ?
        <p>No hay elementos en carrito</p>
        : carrito.map(producto => (
            <Producto
                key={producto.id}
                producto={producto}
            />
        )) }
    </div>
);
 
export default Carrito;