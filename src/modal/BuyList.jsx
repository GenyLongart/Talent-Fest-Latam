import React, {useState, useEffect} from "react"
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import productHelpers from "../productHelpers/ProductHelpers";

export default function  BuyList ({product, activeFilter, filterFreeShipping}) {

  const orderFunctionMap = {
      precio: productHelpers.orderPrices,
      shipping: productHelpers.orderTimes,
  };

  const orderedOfferings = orderFunctionMap[activeFilter](product, filterFreeShipping);

  return (
    <div className="w-full grid justify-around">
        {product ? orderedOfferings.map(item => (
          
      <div key="item" className="shadow-md h-[110px] w-[672px] rounded flex flex-row justify-between ml-[20px] mb-[30px]">
        <div className="flex flex-col">
          <span className="text-[#717171] font-Lato text-[18px]">{item.specialPrice}</span>
          <span className="text-[#717171] font-Lato text-[18px]">{item.price}</span>
        </div>
        <span className="flex flex-row font-Lato text-[14px] text-[#717171] font-bold ml-[45px]"><AiOutlineCheck />{item.shippingTime}</span>
        <div className="flex flex-col  ml-[70px]">
        <span className="text-[#717171] font-Lato text-[14px]">{item.seller}</span>
        <span className = 'flex p-[2px] justify-center items-center text-xs h-[20px] w-[auto]  bg-[#68717D] text-white text-center font-bold rounded-lg mx-1'><AiFillStar />{item.rating}/5</span>
        </div>
        
        <button className="h-[43px] w-[202px] rounded-full bg-[#FF6200] text-white font-bold text-lg text-center">Agregar al carro</button>
      </div>
        )) : 
        <span>loading offerings</span>}
    </div>
  )

}