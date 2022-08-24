import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";


const ModalContent = ({product}) => {
  return (
    <div>
      <div>
        <p className="font-Lato"><AiFillCheckCircle />Elige tus opciones para revisar vendedores</p>
        <div>
          <img />
          <span className="font-Lato">{product.brand}</span>
          <span className="font-Lato">{product.name}</span>
        </div>
      </div>

      <div>
        <p className="font-Lato"><AiFillCheckCircle />Selecciona un lugar para ver el tipo de entrega</p>


        <button className="bg-[#E1E1E1] text-[#636363] font-bold w-[228px] h-[45px] rounded-[24px]">Revisar vendedores</button>
      </div>
    </div>
  );
};

export default ModalContent;
