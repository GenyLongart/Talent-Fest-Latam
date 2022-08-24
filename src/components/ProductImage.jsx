import React from 'react';

export const ProductImage = ({product}) => {
    
    return (
    <div>
        
        
         {Array.isArray(product?.images) ? console.log('holis', product.images) : ''}
        <img src={product.images[0]}  />
    </div>
     
    
)
  
}