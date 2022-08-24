import React from "react";

export const ProductImage = ({ product }) => {
  return (
    <div className=" flex justify-center items-center">
      <img src={product.images[0]} />
    </div>
  );
};
