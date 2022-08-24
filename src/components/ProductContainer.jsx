import React, { useContext, useEffect, useState } from 'react';
import {ProductContext} from '../contexts/productContext';
import {ProductImage} from './ProductImage.jsx';

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
    <div>
        <ProductImage product={product}/>
    </div>
)  
}