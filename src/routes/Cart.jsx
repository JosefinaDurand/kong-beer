import React from 'react';

function Cart() {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {/* Acá va la lista de productos en el carrito */}
      <div>
        <p>Producto 1 - $150</p>
        <p>Producto 2 - $190</p>
        {/* ... otros productos en el carrito */}
      </div>
      {/* Mostrar el total y otros detalles del carrito */}
      <div>
        <p>Total: $340</p>
        <button>Realizar Pedido</button>
      </div>
    </div>
  );
}

export default Cart;
