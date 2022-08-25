import React from 'react'
import { AiOutlineShareAlt } from "react-icons/ai";

export const ProductData = ({ product }) => {
  return (
    <div>
      <div className='flex justify-between font-Lato w-[550px]'>
        <p className='text-sm font-bold inline'>{product.brand}</p>
        <p className='text-xs  text-gray-500 inline'>Código del producto: {product.productId}</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-[28px]  inline-block mr-48 font-light leading-8 tracking-tighter' >{product.name}</p>
        <AiOutlineShareAlt style={{ color: 'gray', display: 'inline', width: '25px', height: '25px',}} />
      </div>
    </div>
  )
}