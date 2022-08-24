import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/productContext';
import { ProductImage } from './ProductImage.jsx';
import { HelpInfo } from './HelpInfo';
import Modal from '../modal/Modal';
import { ProductActions } from './ProductActions';
import { ProductData } from './ProductData';
import { ProductPrice } from './ProductPrice';
import BuyBox from "../modal/BuyBox";

export const ProductContainer = () => {
    const context = useContext(ProductContext);
    const [product, setProduct] = useState(false);

    useEffect(async () => {
        const response = await context.productsData();
        setProduct(response.data);
        console.log(response.data)
    }, []);
    if (!product) return ("cargando")
    return (
    <div className='flex w-full h-full justify-center mt-0 my-0 bg-[#E6E6E6]'>
        <div className='flex  justify-between  p-4 w-[1200px] h-[750px] bg-white'>
            <div className='flex '>
                <div>
                    <ProductImage product={product}/>
                    <HelpInfo />
                    <BuyBox />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <ProductData product = {product}/>
                <ProductPrice product = {product}/>
                <ProductActions />
                <h1>product offerings opener</h1>
                <Modal product = {product}/>
            </div> 
        </div>
    </div>
    )
}