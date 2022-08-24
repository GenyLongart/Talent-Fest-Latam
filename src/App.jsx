import { useState, useContext } from 'react'
import {ProductContainer} from './components/ProductContainer'
// import  RegionDistrictContext  from './contexts/regionDistrictProvider'
import { Header } from './components/Header'
import {ProductContext, getDefaultValue} from './contexts/productContext'
import { LocationContext, RegionDistrictSchema } from './contexts/regionDistrictProvider'
import { ProductData } from './components/ProductData'
function App() {

  return (

    <ProductContext.Provider value={getDefaultValue()}>
      <LocationContext.Provider value={RegionDistrictSchema()}>
      
      
          <Header />
       
      
          <ProductContainer />
    
      </LocationContext.Provider>
    </ProductContext.Provider>
  )
}

export default App