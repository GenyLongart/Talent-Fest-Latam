import { useState, useContext } from 'react'
import {ProductContainer} from './components/ProductContainer'
// import  RegionDistrictContext  from './contexts/regionDistrictProvider'
import { Header } from './components/Header'
import {ProductContext, getDefaultValue} from './contexts/productContext'
import { LocationContext, RegionDistrictSchema } from './contexts/regionDistrictProvider'
function App() {

  return (

    <ProductContext.Provider value={getDefaultValue()}>
      <LocationContext.Provider value={RegionDistrictSchema()}>
      <div className="App">
        <Header />
        <ProductContainer />
      </div>
      </LocationContext.Provider>
    </ProductContext.Provider>
  )
}

export default App