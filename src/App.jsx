import { useState, useContext } from 'react'
import productContext from "./contexts/productProvider";
// import  RegionDistrictContext  from './contexts/regionDistrictProvider'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const context= useContext(productContext);

  return (
    <productContext>
    <div className="App">
      <Header />
      <h2>HOLA TALENT FEST</h2>
    </div>
    </productContext>
  )
}

export default App
