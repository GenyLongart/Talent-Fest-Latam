import { useState } from 'react'
import { ProductProvider } from './context/productContext'
import { RegionComunaProvider } from './context/regionComunaContext'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <h2>HOLA TALENT FEST</h2>
      <RegionComunaProvider />

    </div>

  )
}

export default App
