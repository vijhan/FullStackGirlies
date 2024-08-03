import React, { createContext, useState, useEffect } from "react";
// import all_product from "../components/Assets/data";
import { getProducts } from "../Services/ProductService";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [all_product, setProducts] = useState([]);
    
    useEffect(() => {
        async function fetchProducts() {
           const all_product = await getProducts();
            setProducts(all_product);
        }
        fetchProducts();
    }, [])
  

  const sortByPriceDecreasing = () => {
    setCart((prevCart) => {
        return prevCart.sort((a,b) => {
                return b.new_price - a.new_price;
        })
    })
  }

  const sortByPriceAscending = () => {
    setCart((prevCart) => {
        return prevCart.sort((a,b) => {
            return a.new_price - b.new_price;
        })
    })
    
  }

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

  const removeFromCart = (id, size) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === id && item.size === size
      );
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter(
          (item) => !(item.id === id && item.size === size)
        );
      }
    });
  };

  const contextValue = {
    all_product,
    cart,
    addToCart,
    removeFromCart,
    sortByPriceDecreasing,
    sortByPriceAscending,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
