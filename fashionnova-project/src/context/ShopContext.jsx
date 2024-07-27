import React, { createContext, useState } from "react";
import all_product from "../components/Assets/data";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, size, quantity: 1 }];
      }
    });
  };

  const contextValue = {
    all_product,
    cart,
    addToCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
