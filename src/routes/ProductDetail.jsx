import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  // Obtén el ID del producto de los parámetros de la URL
  const { productId } = useParams();
  // Estado para almacenar los detalles del producto
  const [product, setProduct] = useState(null);

  // Efecto para cargar los detalles del producto al montar el componente
  useEffect(() => {
    // Define una función asincrónica para realizar la solicitud a la API
    const fetchProductDetails = async () => {
      try {
        // Realiza la solicitud a tu API para obtener detalles del producto
        const response = await axios.get(`tu/api/productos/${productId}`);
        // Establece los detalles del producto en el estado
        setProduct(response.data);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    // Llama a la función para obtener los detalles del producto al montar el componente
    fetchProductDetails();
  }, [productId]); // Asegúrate de incluir `productId` como dependencia para que la solicitud se realice cuando cambie

  // Renderiza el componente dependiendo de si los detalles del producto han sido cargados
  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product ? (
        <div>
          <p>ID del Producto: {product.id}</p>
          <p>Nombre: {product.name}</p>
          {/* Otros detalles del producto */}
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
}

export default ProductDetail;
