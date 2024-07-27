import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  return (
    <>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.new_price}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
