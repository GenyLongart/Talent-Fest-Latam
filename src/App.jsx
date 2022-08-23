import { useState, useContext } from 'react'
<<<<<<< HEAD
=======
import { ProductsProvider } from './contexts/productsContext';
>>>>>>> 911009beed6cc06085124e754dd21ebfafd9089b
import {ProductContainer} from './components/ProductContainer'
// import  RegionDistrictContext  from './contexts/regionDistrictProvider'
import { Header } from './components/Header'
import {ProductContext, getDefaultValue} from './contexts/productContext'
function App() {

  return (

    <ProductContext.Provider value={getDefaultValue()}>
      <div className="App">
        <Header />
        <ProductContainer />
        <h2>HOLA TALENT FEST</h2>
      </div>
    </ProductContext.Provider>
  )
}

export default App