import React from 'react';

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span>{item.name}</span>
                <span className="badge bg-secondary ms-2">{item.quantity}</span>
              </div>
              <div className="input-group input-group-sm" style={{ maxWidth: '100px' }}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
