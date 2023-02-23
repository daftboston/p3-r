import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import CardSong from './components/CardSong'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count +1 )}>
          count is + {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count is - {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Button propiedad = "este es el valor de la propiedad"
      texto="cancelar"/>
      <Button 
      texto="Aceptar"/>
      <Button texto ="Iniciar sesion" />

      <div>
        <CardSong
        song="STORYTIME"
        band="Nighwish"
        genre="Metal"
        album="Imaginarium"
        date="2011"        
        />
        <CardSong
        song="FLIGHT OF ACARUS"
        band="Iron Maiden"
        genre="Metal"
        album="Peace of Mind"
        date="1983"        
        />
      </div>

    
    </div>
  )
}

export default App


