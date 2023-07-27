// Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Product;
