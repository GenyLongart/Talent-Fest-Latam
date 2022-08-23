import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [product, setProduct] = useState({});
  const fetchData = async () => {
    const productOne =
      "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox1.json";
    const productTwo =
      "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox2.json";
    const productThree =
      "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox3.json";
    const positions = [productOne, productTwo, productThree];
    const randomPosition = Math.floor(Math.random() * (2 + 1));
    const data = await axios.get(positions[randomPosition]);

    // console.log(data)
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider
      value={
        { product, setProduct, productsData: fetchData }
      }>
      
      {children}

    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
