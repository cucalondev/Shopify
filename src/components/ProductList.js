// ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
