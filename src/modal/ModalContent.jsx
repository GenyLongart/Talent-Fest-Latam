import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ModalContent = ({ product }) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <AiFillCheckCircle className="w-[33px] h-[33px] mr-[10px] text-[#333333]" />
        <p className="font-Lato text-base">
          Elige tus opciones para revisar vendedores
        </p>
      </div>

      <div className="flex flex-row p-[10px] mr-[20px]">
        <img className="h-[61px] w-[61px] m-[10px]" src={product.images[1]} />
        <div className="flex flex-col justify-center">
          <span className="font-Lato font-bold text-sm">{product.brand}</span>
          <span className="font-Lato text-base">{product.name}</span>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <AiFillCheckCircle className="w-[33px] h-[33px] mr-[10px] text-[#333333]" />
        <p className="font-Lato text-base">
          Selecciona un lugar para ver el tipo de entrega
        </p>
      </div>

      <div className="flex justify-around p-[20px]">
        <select className="rounded-[4px] w-[316px] h-[48px] border-[1px] border-[#767676]" id="selectRegion">
          <option value="metropolitana">Metropolitana de Santiago</option>
          <option value="valparaíso">Valparaíso</option>
          <option value="ñuble">Ñuble</option>
        </select>

        <select className="rounded-[4px] w-[316px] h-[48px] border-[1px] border-[#767676]" id="selectDistrict">
          <option value="alhue">Alhué</option>
          <option value="curacavi">Curacaví</option>
          <option value="mariapinto">María Pinto</option>
          <option value="melipilla">Melipilla</option>
        </select>
      </div>

      <div className="flex justify-end p-[25px] mr-[10px]">
        <button className="bg-[#E1E1E1] text-[#636363] font-bold w-[228px] h-[45px] rounded-[24px]">
          Revisar vendedores
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
