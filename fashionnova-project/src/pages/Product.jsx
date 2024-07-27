import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Review from "../components/Reviews/Review";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <Review />
    </div>
  );
};

export default Product;
