<<<<<<< HEAD
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
=======
import { useProductsContext } from '../contexts/productsContext'

import React, { useEffect } from 'react';


export const ProductContainer = () => {
    const { product, setProduct } = useProductsContext();
        useEffect(() =>{
            if(!product){
                return 'no product'
            } else {
                const image = product.data.images[0]
                console.log(image)
            }
        },[product])

    return (
    <div>
        <h1>holi</h1>
    </div>
)  
}


>>>>>>> 911009beed6cc06085124e754dd21ebfafd9089b
