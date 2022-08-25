import React from "react";
import maxby from "lodash.maxby";
import minby from "lodash.minby";

export const ProductPrice = ({ product }) => {
  const minPrice = minby(product.offerings, (o) => o.price).price;
  const maxPrice = maxby(product.offerings, (o) => o.price).price;
  const minSpecialPrice = minby(product.offerings, (o) => o.specialPrice).specialPrice;
  const maxSpecialPrice = maxby(product.offerings, (o) => o.specialPrice).specialPrice;
  const result = {
    minPrice,
    maxPrice,
    minSpecialPrice,
    maxSpecialPrice,
  };
  return (

    <div className=" flex flex-col jutify-start">
      <img
        className=" h-[30px] w-[130px]"
        src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/800b89333801080380f97939456e1bf6a111b6d3/src/img/icon-price.svg"
        alt=""
      />
      <div className="flex flex-row">
        <h1 className="text-base text-red-600 inline-block mr-[5px]">
          {" "}
          Desde $7.430 Hasta $7.750{" "}

        </h1>
        <p className="inline h-[18px] w-[34px] p-[1px] bg-[#EB0029] text-white  font-bold rounded-[3px] text-[12px]">
          -30%
        </p>
      </div>
      <h1 className="text-sm text-gray-500"> Desde ${result.minPrice} Hasta ${result.maxPrice}</h1>
    </div>
  );
};
