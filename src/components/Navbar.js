// NavBar.js
import React from 'react';
import { BiCart } from 'react-icons/bi';

const NavBar = ({ openCart, cartItemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Shopify</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            {/* Puedes agregar más enlaces del navbar aquí */}
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-dark me-2" onClick={openCart}>
            <BiCart className="me-2" />
            {cartItemCount > 0 && <span className="badge bg-secondary">{cartItemCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
