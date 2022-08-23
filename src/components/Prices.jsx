import React, { useEffect } from 'react';
import {useProductsContext} from "../contexts/productContext"


const Prices = () => {

  const { product, setProduct } = useProductsContext();

  useEffect(()=>{
    if(!product){
      return 'Oops theres no product'
    } else{
      console.log(product)
      const offerings = product.data.offerings
      console.log(offerings)
      // let prices=[];
      // offerings.map((item) => {
        // const priceMin = Math.min(item.price);
        // console.log(priceMin)
        // const specialPriceMin = Math.min(item.specialPrice);
        // const priceMax = Math.max(item.price);
        // const specialPriceMax = Math.max(item.specialPrice);
        // const newPrices = {
        //   min: priceMin,
        //   offerMin: specialPriceMin,
        //   max: priceMax,
        //   offerMax: specialPriceMax,
        // };
        // // return newPrices;
        // prices.push(newPrices)
      // console.log(prices.price)
      // const priceMin= Infinity;
      // const priceMax= -1;
      // const specialPriceMin= Infinity;
      // const specialPriceMax= -1;
  }},[product])

  var items = [
    { price: 2000, specialprice: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  items.sort(function (a, b) {
    if (a.price > b.price) {}
    if (a.price < b.price) {}
    return 0;
    
    if (a.specialprice > b.specialprice) {}
    if (a.price > b.price) {}
    return 0;
    // a must be equal to b
    
  });

  return (<h1>HOLA</h1>)
  
}

export default Prices;
