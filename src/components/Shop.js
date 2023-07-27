import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';

const Shop = () => {
  const [products] = useState([
    { id: 1, name: 'Melón', price: 10, imageUrl: require('../assets/melon.jpg').default },
    { id: 2, name: 'Sandía', price: 20, imageUrl: require('../assets/sandia.jpg').default },
    { id: 3, name: 'Plátanos', price: 15, imageUrl: require('../assets/platanos.jpg').default },
    // Agrega más productos si es necesario
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCartToggle = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Navbar openCart={handleCartToggle} cartItemCount={cartItemCount} />
      <div className="container py-4">
        <div className="row">
          <div className="col-md-8">
            <h1>Bienvenido a Shopify</h1>
            <p>Explora nuestra selección de deliciosos productos frescos.</p>
            <ProductList products={products} addToCart={addToCart} />
          </div>
          <div className="col-md-4">
            {isCartOpen && (
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
