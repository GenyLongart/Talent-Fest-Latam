import { useProductsContext } from '../contexts/productsContext'

import React, { useEffect } from 'react';


export const ProductContainer = () => {
    const { product, setProduct } = useProductsContext();
        useEffect(() =>{
            if(!product){
                return 'no product'
            } else {
                const image = product.data.images[0]
                console.log(image)
            }
        },[product])

    return (
    <div>
        <h1>holi</h1>
    </div>
)  
}


