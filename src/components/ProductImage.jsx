import React from "react";

export const ProductImage = ({ product }) => {
  return (
    <div className=" flex justify-center items-center">
      <img src={product.images[0]+'?wid=600&hei=600&qlt=70'} />
    </div>
  );
};
