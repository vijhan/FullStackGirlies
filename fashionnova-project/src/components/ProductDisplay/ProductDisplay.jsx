import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCartClick = () => {
    if (selectedSize) {
      setIsButtonClicked(true);
      addToCart(product, selectedSize);
      setTimeout(() => setIsButtonClicked(false), 200);
    }
  };

  if (!product) {
    return <div>Product information is unavailable.</div>;
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-img">
        <img
          className="productdisplay-main-img"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            OLD: ${product.old_price || "N/A"}
          </div>
          <div className="productdisplay-right-price-new">
            NEW: ${product.new_price || "N/A"}
          </div>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-option ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button
          className={`add-to-cart-button ${isButtonClicked ? "clicked" : ""}`}
          onClick={handleAddToCartClick}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
