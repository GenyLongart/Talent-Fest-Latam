import React from "react";

export const ProductPrice = ({ product }) => {
  return (

    <div className=" flex flex-col jutify-start">
      <img
        className=" h-[30px] w-[130px]"
        src="../src/img/icon-price.svg"
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
      <h1 className="text-base text-gray-500"> Desde $13.509 Hasta $14.159</h1>
    </div>
  );
};
