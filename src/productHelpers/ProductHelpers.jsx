
const productHelpers = {
  orderPrices: (product, filterFreeShipping) => {
    const cloneProduct = { ...product };
    if(filterFreeShipping===true){
      cloneProduct.offerings = cloneProduct.offerings.filter((offering) =>
        offering.shippingPrice != 0
      )
    }
    return cloneProduct.offerings 
      .sort((a, b) => {
        let returnValue = 0;
        if (a.price > b.price) returnValue = 1;
        if (a.price < b.price) returnValue = -1;

        return returnValue;
      })
      .sort((a, b) => {
        let returnValue = 0;
        if (a.specialPrice > b.specialPrice) returnValue = 1;
        if (a.specialPrice < b.specialPrice) returnValue = -1;

        return returnValue;
      });
    
  },

  orderTimes: (product, filterFreeShipping) => {
    const cloneProduct = { ...product };
    if(filterFreeShipping===true){
      cloneProduct.offerings = cloneProduct.offerings.filter((offering) =>
        offering.shippingPrice != 0
      )
    }
    return cloneProduct.offerings 
      .sort((a, b) => {
        let returnValue = 0;
        if (a.shippingTime > b.shippingTime) returnValue = 1;
        if (a.shippingTime < b.shippingTime) returnValue = -1;

        return returnValue;
      });
    
  },
};

export default productHelpers;
