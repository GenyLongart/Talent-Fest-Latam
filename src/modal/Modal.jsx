import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import { BiChevronRight, BiX } from "react-icons/bi";
// import BuyBox from "./BuyBox";
import ModalTitle from "./ModalTitle";

export default function Modal({ product }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-white font-Lato text-[#4A4A4A] text-sm px-0 py-3 rounded outline-none mr-0 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Revisar alternativas <BiChevronRight />
      </button>
      {showModal ? (
        <>
          <div className="h-[768px] mr-0  items-end flex justify-end overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[760px] h-[768px]">
              {/*content*/}
              <div className="h-[768px] border-0 shadow-lg relative flex flex-col w-[760px] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex justify-end p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="mr-[25%]">
                  <ModalTitle />
                  </div>
                  <div className="">
                  <button
                    className="text-[#767676] w-[1.5px] h-[15.91px] background-transparent font-bold uppercase px-6 py-2 text-[25px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <BiX />
                  </button>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ModalContainer product={product} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 font-Lato text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                  {/* <BuyBox /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
