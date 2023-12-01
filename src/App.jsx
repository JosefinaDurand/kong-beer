import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Products from './routes/Products';
import ProductDetail from './routes/ProductDetail';
import Cart from './routes/Cart';
import "./styles.css";
import "./App.css";

function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/products" element={<Products/>} />
<Route path="/products/:productId" element={<ProductDetail/>} />
<Route path="/cart" element={<Cart/>} />
</Routes>
<Footer />
</Router>
);
}
export default App;