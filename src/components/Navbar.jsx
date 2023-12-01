import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className='navbar'>
                <li>
                    <Link className='nav-link' to="/">Inicio</Link>
                </li>
                <li>
                    <Link className='nav-link' to="/products">Productos</Link>
                </li>
                <li>
                    <Link className='nav-link' to="/cart">Carrito</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;