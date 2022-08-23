import React from 'react';
const product=
{
  "name": "Polera 1 pieza Algodón Niño",
  "productId": "882382727",
  "brand": "STARTER",
  "images": [
    "https://falabella.scene7.com/is/image/Falabella/882382745_1",
    "https://falabella.scene7.com/is/image/Falabella/882382745_2"
  ],
  "offerings": [
    {
      "seller": "Seller E",
      "rating": 3,
      "price": 14029,
      "specialPrice": 7750,
      "shippingTime": 2,
      "shippingZones": [
        { "region": "Metropolitana de Santiago", "comuna": "Ñuñoa" },
        { "region": "Metropolitana de Santiago", "comuna": "San Bernardo" },
        { "region": "Valparaíso", "comuna": "Putaendo" },
        { "region": "Metropolitana de Santiago", "comuna": "La Reina" },
        { "region": "Valparaíso", "comuna": "Villa Alemana" },
        { "region": "Ñuble", "comuna": "Quillón" },
        { "region": "Valparaíso", "comuna": "Olmué" }
      ]
    },
    {
      "seller": "Seller C",
      "rating": 5,
      "price": 13509,
      "specialPrice": 7670,
      "shippingTime": 2,
      "shippingZones": [
        { "region": "Metropolitana de Santiago", "comuna": "Ñuñoa" },
        { "region": "Valparaíso", "comuna": "Limache" },
        { "region": "Valparaíso", "comuna": "Concón" },
        { "region": "Metropolitana de Santiago", "comuna": "La Reina" },
        { "region": "Ñuble", "comuna": "Ránquil" },
        { "region": "Metropolitana de Santiago", "comuna": "Calera de Tango" },
        { "region": "Ñuble", "comuna": "Quillón" },
        { "region": "Ñuble", "comuna": "El Carmen" },
        { "region": "Ñuble", "comuna": "Chillán Viejo" },
        { "region": "Metropolitana de Santiago", "comuna": "Lo Espejo" },
        { "region": "Metropolitana de Santiago", "comuna": "San Bernardo" }
      ]
    },
    {
      "seller": "Seller D",
      "rating": 3,
      "price": 14159,
      "specialPrice": 7430,
      "shippingTime": 0,
      "shippingZones": [
        { "region": "Metropolitana de Santiago", "comuna": "Ñuñoa" },
        { "region": "Valparaíso", "comuna": "San Felipe" },
        { "region": "Valparaíso", "comuna": "Villa Alemana" },
        { "region": "Metropolitana de Santiago", "comuna": "Renca" },
        { "region": "Valparaíso", "comuna": "Quintero" },
        { "region": "Ñuble", "comuna": "Quillón" }
      ]
    }
  ]
}
const GetPrices = () => {
  let prices=[];
  const offerings =
  product.offerings.map((item) => (
    <div key={item} className="flex w-56 mt-1.5 ">
        <p className="w-14 ml-4 flex ">{item.price}</p>
        <p className="w-10 ml-20 flex ">{item.specialPrice}</p>
    </div>))
  console.log(prices.price)
  const priceMin= Infinity;
  const priceMax= -1;
  const specialPriceMin= Infinity;
  const specialPriceMax= -1;
  }
  return {}