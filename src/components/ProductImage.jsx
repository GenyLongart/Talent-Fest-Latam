import React from "react";

export const ProductImage = ({ product }) => {
  return (
    <div>
      <img src={product.images[0]} />
    </div>
  );
};
