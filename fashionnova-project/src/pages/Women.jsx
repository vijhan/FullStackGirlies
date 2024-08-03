import React, { useContext } from "react";
import Item from "../components/Item/Item";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import "./CSS/Women.css";

const Women = () => {
  const { all_product } = useContext(ShopContext);

  const womenProducts = all_product?.filter(
    (product) => product.category === "Women"
  );

  return (
    <>
      <div className="shop-category">
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of {womenProducts?.length} products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {womenProducts?.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
        <div className="shopcategory-loadmore">Explore More</div>
      </div>
    </>
  );
};

export default Women;
