import React, { useContext } from "react";
import Item from "../components/Item/Item";
import { ShopContext } from "../context/ShopContext"; // Adjust the path if necessary
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import "./CSS/Women.css";

const Men = () => {
  const { all_product, addToCart } = useContext(ShopContext);

  return (
    <>
      <div className="shop-category">
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item) => {
            if (item.category === "Men") {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  onAddToCart={() => addToCart(item)} // Pass addToCart function
                />
              );
            }
            return null;
          })}
        </div>
        <div className="shopcategory-loadmore">Explore More</div>
      </div>
    </>
  );
};

export default Men;
