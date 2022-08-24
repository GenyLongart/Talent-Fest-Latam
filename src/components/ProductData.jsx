import React from 'react'
import { AiOutlineShareAlt } from "react-icons/ai";

export const ProductData = ({product}) => {
  return (
    <div className='w-[450px]'>
        <p className='text-sm font-bold inline'>{product.brand}</p>
        <p className='text-xs ml-[40%] text-gray-500 inline'>Código del producto: {product.productId}</p>
        <p className='text-xl inline-block mr-48 font-light leading-8 tracking-tighter' >{product.name}</p> <AiOutlineShareAlt style={{color:'gray', display:'inline'}} />

    </div>
  )
}