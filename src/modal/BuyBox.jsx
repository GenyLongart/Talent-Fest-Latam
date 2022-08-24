import React from "react";
import {ImCheckboxChecked} from "react-icons/im"

export default function  BuyBox () {
  return (
    <table className="table-auto font-Latos">

      <thead className="">
        <tr>
          <th className="font-Lato">Ordenar por:</th> 
          <select>Precio de menor a mayor</select>
          <th><ImCheckboxChecked className="text-[#FF6200]"/></th>
          <th className="font-bold">Envío gratis</th>
        </tr>
      </thead>
      <thead className="">
        <tr>
          <th className="font-Lato">Envío</th>
          <th className="font-Lato">Tiempo de entrega</th>
          <th className="font-Lato">Vendedor</th>
          <th className="font-Lato text-white">Agregar al carro</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      
    </table>
  )

}