
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


const ordered = offerings.sort((a, b) => {
    let returnValue;
    if (a == product.offerings.price < b == product.offerings.price) returnValue = 1
    if (a == product.offerings.price > b == product.offerings.price) returnValue = -1
    // a debe ser igual b
    return returnValue;
  });
  const orderedSpecial = offerings.sort((a, b) => {
    let returnValue;
    if (a == product.offerings.specialPrice < b == product.offerings.specialPrice) returnValue = 1
    if (a == product.offerings.specialPrice > b == product.offerings.specialPrice) returnValue = -1
    // a debe ser igual b
    return returnValue;
  });
  

  console.log(ordered, 'hello');
  console.log(orderedSpecial, 'buena');