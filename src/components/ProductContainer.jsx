import React, { useContext, useEffect, useState } from 'react';
import {ProductContext} from '../contexts/productContext';
import {ProductImage} from './ProductImage.jsx';
import { HelpInfo } from './HelpInfo';
import Modal from '../modal/Modal';
import {ProductActions} from './ProductActions'

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
        

    <div className='bg-black' >
        <div className='flex flex-col mt-4 items-center '>
            <div className='flex fixed mt-20 border-4 border-red-700 justify-between w-[1130px]'>
                <div className='flex border-4 border-blue-800'>
                    <div>
                        <ProductImage product={product}/>
                        <HelpInfo />
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1>product data</h1>
                    <h1>product price</h1>
                    <ProductActions />
                    <h1>product offerings opener</h1>
                    <Modal />
                </div>
            </div>
        </div>
    </div>
)  
}