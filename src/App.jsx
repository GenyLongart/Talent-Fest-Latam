import { useState, useContext } from 'react'
import { ProductsProvider } from './contexts/productsContext';
import {ProductContainer} from './components/ProductContainer'
// import  RegionDistrictContext  from './contexts/regionDistrictProvider'
import { Header } from './components/Header'
import { useProductsContext } from './contexts/productsContext';
function App() {

  return (
    <ProductsProvider>
      <div className="App">
        <Header />
        <ProductContainer />
        <h2>HOLA TALENT FEST</h2>
      </div>
    </ProductsProvider>
  )
}

export default App
