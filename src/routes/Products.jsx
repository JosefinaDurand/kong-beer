
import React, { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";


const Products = () => {
  const [beers, setBeers] = useState([]); 

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://ghibli-api-v1.azurewebsites.net/api/v1/movies');
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
      <div className="beer-list">
        {beers.map((beer) => (
          <ProductCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default Products;