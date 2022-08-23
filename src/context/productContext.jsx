import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AppContext = createContext();
const productOne ="https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox1.json";
const productTwo = "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox2.json"
const productThree ="https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox3.json"
const positions = [productOne, productTwo, productThree]
export function ProductProvider() {
  const [product, setProduct] = useState({})
  const productsData = async () => {
    const randomPosition = Math.floor(Math.random() * (2  + 1))
    const data = await axios.get(positions[randomPosition])
    // console.log(data)
    setProduct(data)
  }
    useEffect(() => {
        productsData()
    }, []);
    return (
    <div>
        {/* <h1>{product.name}</h1>
        <img src={product.images} alt="" /> */}
    </div>
    );
}