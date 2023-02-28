import { Component, useState } from 'react'

import './App.css'
import phrases from "./data/phrases.json"
import CookieCard from './components/CookieCard'
import fondo1 from "./assets/fondo1.png"
import fondo2 from "./assets/fondo2.png"
import fondo3 from "./assets/fondo3.png"
import fondo4 from "./assets/fondo4.png"


function App() {

  const backgrounds = [fondo1,fondo2, fondo3, fondo4]
  console.log(phrases.length);
  const [index, setindex]=useState(0)
  const changeIndex=()=>{
    setindex(Math.floor(Math.random()*phrases.length))
  }


  return (
    <div className="App" style={{
      backgroundImage:`url(${backgrounds[2]})`,      
    }}>
      <CookieCard dataCookie={phrases[index]}/>
      <button onClick={changeIndex}> Probar mi suerte</button>
 

    
    </div>
  )
}

export default App


