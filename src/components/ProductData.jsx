import React from 'react'
import { AiOutlineShareAlt } from "react-icons/ai";

export const ProductData = () => {
  return (
    <div className='w-[450px]'>
        <p className='text-xs ml-[60%]'>Código del producto:</p>
        <p className='text-sm'>Marca producto </p>
        <p className='text-xl inline-block mr-48' >Nombre producto</p> <AiOutlineShareAlt style={{color:'gray', display:'inline'}} />

    </div>
  )
}
