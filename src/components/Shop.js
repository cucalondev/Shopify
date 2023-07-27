// Shop.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar'

const Shop = () => {
    const [products] = useState([
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 15 },
        // Agrega más productos si es necesario
      ]);
    
      const [cartItems, setCartItems] = useState([]);
      const [isCartOpen, setIsCartOpen] = useState(false);
    
      const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
      };
    
      const removeFromCart = (product) => {
        setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item.id !== product.id)
        );
      };
    
      const openCart = () => {
        setIsCartOpen(true);
      };
    
      const closeCart = () => {
        setIsCartOpen(false);
      };
    
      return (
        <div className="app">
          <Navbar openCart={openCart} />
          <div className="container py-4">
            <div className="row">
              <div className="col-md-8">
                <ProductList products={products} addToCart={addToCart} />
              </div>
              <div className="col-md-4">
                {isCartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Shop;
