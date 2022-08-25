import React,{useContext, useEffect, useState} from 'react'
// import { ProductContext } from '../contexts/productContext';
import Modal from '../modal/Modal';
import minby from "lodash.minby"



export const OfferingsOpener = ({product, location}) => {
  // const context = useContext(ProductContext);
  // const [product, setProduct] = useState(false);
  
  // useEffect(async () => {
  //   const response = await context.productsData();
  //   setProduct(response.data);
  //   console.log(response.data)
  // }, []);
  if (!product) return ("cargando")
  const minSpecialPrice = minby(product.offerings, (o) => o.specialPrice).specialPrice;
  const result = {
    minSpecialPrice,
  };
  return (
    <div className = 'h-[95px] w-[325px] bg-white rounded border border-black p-[5px] mt-[15px]'>
        <h1 className='text-sm text-black-600 font-bold'> 
        Más vendedores ofrecen este producto
        <span className = 'p-[2px] items-center text-xs h-[10px] w-[auto]  bg-[#1E364B] text-white text-center font-bold rounded-lg mx-1'>NUEVO</span> 
        </h1> 
        <h1 className='text-sm text-gray-500'> {product.offerings.length} opciones desde ${result.minSpecialPrice}</h1>
        <Modal product = {product} location={location} />
    </div>
  )
}