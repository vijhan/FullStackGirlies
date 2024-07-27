import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./CSS/Cart.css";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  const getTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.new_price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.new_price}</p>{" "}
                {/* Use `new_price` for display */}
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;
