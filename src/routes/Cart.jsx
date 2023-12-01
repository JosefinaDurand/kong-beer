import React from 'react';

function Cart() {
    return (
        <div>
            <h2>Carrito de Compras</h2>
            <div>
                <p>Producto 1 - $150</p>
                <p>Producto 2 - $190</p>
            </div>
            <div>
                <p>Total: $340</p>
                <button>Realizar Pedido</button>
            </div>
        </div>
    );
}

export default Cart;
