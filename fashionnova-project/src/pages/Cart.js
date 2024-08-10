import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./CSS/Cart.css";
import StripeContainer from "../components/CheckoutForm";

const Cart = () => {
  const { cart, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

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
                <h3 className="cart-item-name">
                  {item.name} - {item.size}
                </h3>
                <p className="cart-item-price">${item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalCartAmount().toFixed(2)}</h3>
        <StripeContainer />
      </div>
    </div>
  );
};

export default Cart;
