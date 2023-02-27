import { Component, useState } from 'react'

import './App.css'
import phrases from "./data/phrases.json"
import CookieCard from './components/CookieCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CookieCard/>
 

    
    </div>
  )
}

export default App


