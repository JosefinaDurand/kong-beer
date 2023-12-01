import React, {useState, useEffect} from 'react';
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await fetch('https://run.mocky.io/v3/1ca302e2-1551-499a-8cf3-9db2e1f2cf22');

                const data = await response.json();
                setBeers(data);
            } catch (error) {
                console.error('Error fetching beers:', error);
            }
        };
        fetchBeers();
    }, []);
    return (
        <div>
            <h2>Listado de Cervezas</h2>
            <div className="featured-products">
                {beers.length > 0 ? beers.map((beer) => (
                        <ProductCard key={beer.id} product={beer}/>
                    ))
                    : <p>Cargando productos... </p>
                }
            </div>
        </div>
    );
};
export default Products;