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
    <div className='flex fixed mt-20'>
        <div className='flex '>
            <div>
                <ProductImage product={product}/>
                <HelpInfo />
            </div>
        </div>
        <div >
            <h1>product data</h1>
            <h1>product price</h1>
            <ProductActions />
            <h1>product offerings opener</h1>
            <Modal />
        </div>

        
    </div>
)  
}