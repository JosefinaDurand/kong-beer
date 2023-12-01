import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ProductCard from "../components/ProductCard.jsx";
import products from "./Products.jsx";

function ProductDetail() {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch('https://run.mocky.io/v3/1ca302e2-1551-499a-8cf3-9db2e1f2cf22');
                const data = await response.json();
                const product = data.find(product => product.id === parseInt(productId));
                setProduct(product);
            } catch (error) {
                console.error('Error al obtener detalles del producto:', error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    return (
        <div className="product-detail">
            <h2>Detalles del Producto</h2>
            {product ? (
                <ProductCard key={product.id} product={product}/>
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </div>
    );
}

export default ProductDetail;
