import React from 'react'


export const ProductPrice = ({product}) => {
  return (
    <div>
        <img className= 'w-36 inline' src="../src/img/icon-price.svg" alt="" />
        <h1 className='text-sm text-red-600'> Desde $7.430 Hasta $7.750 </h1> 
        <p className = 'h-[18px] w-[38px] pr-5 pl-1 pt-1 pb-7 bg-[#EB0029] text-white text-center font-bold rounded'>30%</p>
        <h1 className='text-sm text-gray-500'> Desde $13.509 Hasta $14.159</h1>
        

    </div>
  )
}