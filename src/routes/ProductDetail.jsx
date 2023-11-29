import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`tu/api/productos/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    fetchProductDetails();
  }, [productId]); 

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product ? (
        <div>
          <p>ID del Producto: {product.id}</p>
          <p>Nombre: {product.name}</p>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
}

export default ProductDetail;
