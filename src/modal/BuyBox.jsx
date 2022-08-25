import React, {useState}from "react";
import BuyList from "./BuyList";


export default function  BuyBox ({product}) {
  const [activeFilter, setActiveFilter] = useState('precio');
  const [filterFreeShipping, setFilterFreeShipping] = useState(false);
  
  return (
    <div>
    <div className=" w-full font-Latos grid">
      <div className="bg-[#F9F9F9] my-1  grid-cols-4 h-[42px] w-[674px] rounded">
          <span className="font-Lato w-[72px] mx-1">Ordenar por:</span> 
          <select onChange={(event) => setActiveFilter(event.target.value)} className=" w-[155px] ml-1 mr-44">
            <option value="precio" className="font-Lato" >Precio</option>
            <option value="shipping" className="font-Lato" >Envío</option>
          </select>
          <input type="checkbox" onClick={() => setFilterFreeShipping(!filterFreeShipping)} />          <span className="font-bold w-[63px] mx-1">Envío gratis</span>
      </div>
      <div className="bg-[#F9F9F9] w-[674px] h-[39px] rounded">
          <span className="font-Lato w-[99px] ml-4 mr-4">Precio</span>
          <span className="font-Lato w-[130px] ml-16 mr-4">Tiempo de entrega</span>
          <span className="font-Lato w-[94px] ml-16 mr-4">Vendedor</span>
          <span className="font-Lato text-[#F9F9F9]">Agregar al carro</span>
      </div>
      <div>
        <BuyList product={product} activeFilter={activeFilter} filterFreeShipping={filterFreeShipping}/>
      </div>
    </div>
    </div>
  )

}