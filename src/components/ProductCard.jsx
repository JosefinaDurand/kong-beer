import React from 'react';
import { useNavigate } from "react-router-dom";


function ProductCard({ product }) {
    const navigate = useNavigate();
  return (
    <div className="product-card" onClick={()=>  navigate(`/products/${product.id}`)}>
      <img className="product-image" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;