import { useEffect, useState } from 'react'

import './App.css'

import axios from "axios"
import Character from './components/Character'




function App() {

  const names = [ "Alan", "Vinicio", "Elizabeth", "Reinaldo", "Jose", "Frank" ]
  const usuarios = [
    {
        nombre: "Susanita",
        animalFavorito : "Gato"
    },
    {
        nombre: "Pedro",
        animalFavorito : "Gato"
    },
    {
        nombre: "Carlos",
        animalFavorito : "Perro"
    },  
    {
        nombre: "Cristian",
        animalFavorito : "Hamster"
    },
    {
        nombre: "Ana",
        animalFavorito : "Perro"
    },  
    {
        nombre: "Karina",
        animalFavorito : null
    }, 
    {
        nombre: "Berenice",
        animalFavorito : "Gato"
    },  
    {
        nombre: "Salvador",
        animalFavorito : "Conejo"
    },  
    {
        nombre: "Omar",
        animalFavorito : "Ajolote"
    },  
    {
        nombre: "Carlos",
        animalFavorito : null
    },
    {
        nombre: "Lupita",
        animalFavorito: null
    } 
]

const [character, setCharacter] = useState([])

 useEffect (()=>{
 axios
 .get ("https://rickandmortyapi.com/api/character")
 .then(resp => { console.log(resp.data.results)
    setCharacter (resp.data.results)}
    )
 .catch ( error => console.error(error) )
 },[])
  



  return (
    <div className="App">

      <ul>
        {
        names.map ((item, indice)=> <li key ={item}>{item}</li>)
      }
      </ul>

      <ul>
        {
        usuarios.map (user=> <li key= {user}>{user.nombre}</li> )
      }
     </ul>


     <ul>
     {
            character.map ( character => ( 
            <Character 
            key = {character.name}
            characterdata = {character}
            />               
            ))

        }
        
     </ul>  

       
    </div>
  )
}

export default App


