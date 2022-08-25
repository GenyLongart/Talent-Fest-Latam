import React from "react";
import {ImCheckboxChecked} from "react-icons/im"
import { BiChevronDown} from "react-icons/bi";
import BuyList from "./BuyList";


export default function  BuyBox () {
  return (
    <div>
    <div className=" w-full font-Latos grid">
      <div className="bg-[#F9F9F9] my-1  grid-cols-4 h-[42px] w-[674px] rounded">
        {/* <tr className="grid-inline "> */}
          <span className="font-Lato w-[72px] mx-1">Ordenar por:</span> 
          <select className=" w-[155px] ml-1 mr-44">
            <option className="font-Lato">Precio de menor a mayor</option>
          </select>
          {/* <BiChevronDown className="w-[20px] h-[20px]"/> */}
          <ImCheckboxChecked className="text-[#FF6200] w-[20px] h-[20px] inline"/>
          <span className="font-bold w-[63px] mx-1">Envío gratis</span>
        {/* </tr> */}
      </div>
      <div className="bg-[#F9F9F9] w-[674px] h-[39px] rounded">
        {/* <tr> */}
          <span className="font-Lato w-[99px] ml-4 mr-4">Precio</span>
          <span className="font-Lato w-[130px] ml-16 mr-4">Tiempo de entrega</span>
          <span className="font-Lato w-[94px] ml-16 mr-4">Vendedor</span>
          <span className="font-Lato text-[#F9F9F9]">Agregar al carro</span>
        {/* </tr> */}
      </div>
      <div>
        <BuyList />
      </div>
    </div>
    </div>
  )

}