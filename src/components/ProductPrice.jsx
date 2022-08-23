const items = [
  { price: 3000, specialPrice: 2100 },
  { price: 4000, specialPrice: 25000 },
  { price: 20000, specialPrice: 28000 },
];

items.sort(function (a, b) {
  if (a.price > b.price) {}
  if (a.price < b.price) {}
    return 0;
  
  if (a.specialPrice > b.specialPrice) {}
  if (a.specialPrice < b.specialPrice) {}
    return 0;
  
});