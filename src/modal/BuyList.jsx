import React, {useState, useEffect, useContext} from "react"
import { ProductContext } from "../contexts/productContext"

export default function  BuyList ({product}) {
  const [offerings, setOfferings] = useState([]);
  // const {productData} = useContext(ProductContext)

  useEffect(()=>{
    setOfferings(product?.offerings)
  }
  ,[product])
  // const offeringList = product.data.map(item => item.offerings)
  console.log(product)


  return (
    <div className="w-full grid justify-around">
        {product ? offerings.map(item => (
      <div key="item" className="shadow-md h-[110px] w-[672px] rounded ">
        <div>
          <span>{item.specialPrice}</span>
          <span>{item.price}</span>
        </div>
        <span>{item.shippingTime}</span>
        <span>{item.seller}</span>
        <button className="h-[43px] w-[202px] rounded-full bg-[#FF6200] text-white font-bold text-lg text-center"></button>
      </div>
        )) : 
        <span>loading offerings</span>}
    </div>
  )

}