

import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <h2>Contacto</h2>
        <p>Email: info@kongbeer.com</p>
        <p>Teléfono: 099 999 999</p>
      </div>
      <div>
        <h2>Seguinos en Redes Sociales</h2>
        <ul className='navbar'>
          <li className='nav-link'>
            <a href="https://facebook.com/kongbeer" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li className='nav-link'>
            <a href="https://twitter.com/kongbeer" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li className='nav-link'>
            <a href="https://instagram.com/kongbeer" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
