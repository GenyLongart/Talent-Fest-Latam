import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/productContext";

export const ProductContainer = () => {
  const context = useContext(ProductContext);
  const [product, setProduct] = useState();

  useEffect(async () => {
    const response = await context.productsData();
    setProduct(response.data);
  }, []);

  return (
    <div>
      <h1>holi</h1>:{" "}
      {Array.isArray(product?.images)
        ? console.log("holis", product.images)
        : ""}
    </div>
  );
};
