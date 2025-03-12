import React, { useState } from 'react';
import './CartSlide.css'; // Create a Cart.css file for styling

function CartSlide() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 25.99, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Product 2', price: 15.50, image: 'https://via.placeholder.com/50' },
  ]); // Example cart items

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <div className="cart-icon" onClick={toggleCart}>
        &#128722;
      </div>

      <div className={`cart-overlay ${isCartOpen ? 'active' : ''}`} onClick={closeCart}>
        <div className={`cart-panel ${isCartOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={closeCart}>
            &times;
          </span>
          <h2>Your Cart</h2>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="cart-total">Total: ${calculateTotal()}</div>
        </div>
      </div>
    </div>
  );
}

export default CartSlide;
