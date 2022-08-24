import { useState, useContext } from 'react'
import {ProductContainer} from './components/ProductContainer'
// import  RegionDistrictContext  from './contexts/regionDistrictProvider'
import { Header } from './components/Header'
import {ProductContext, getDefaultValue} from './contexts/productContext'

function App() {
  
  return (

    <ProductContext.Provider value={getDefaultValue()}>
      <div className="App">
        <Header />
          <ProductContainer/>
      </div>
    </ProductContext.Provider>
  )
}

export default App