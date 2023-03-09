import { useEffect, useState } from 'react'
import './App.css'

import axios from "axios"
import Character from './components/Character'
import Location from './components/Location'




function App() {

 

const [character, setCharacter] = useState([])

 useEffect (()=>{
 axios
 .get ("https://rickandmortyapi.com/api/character")
 .then(resp => { console.log(resp.data.results)
    setCharacter (resp.data.results)}
    )
 .catch ( error => console.error(error) )
 },[])


const [id, setId]= useState ("1")

const[url, setUrl]=useState([])

useEffect (()=>{
axios
.get (`https://rickandmortyapi.com/api/location/${id}`)
.then(resp => {console.log(resp.data)
 setId(resp.data)
setUrl(resp.data.residents)})
.catch ( error => console.error(error) )
},[id])


const searchId = (e)=>{
    e.preventDefault()
    //console.log(e.target[0].value);
    setId(e.target[0].value)

}


  return (
    <div className="App">

        <Location data={id}/>

   <form onSubmit={ (e)=> searchId (e)}>
    
      <input type="text" placeholder='buscar id' />
      <button>Search</button>

    </form>
     
     <ul>
       
      {url.map((item,indice)=> <li>{item}</li> )}

     </ul>






    {/*
     <ul>
     {
            character.map ( character => ( 
            <Character 
            key = {character.name}
            characterdata = {character}
            />               
            ))

        }
        
    </ul> */ }


      

       
    </div>
  )
}

export default App


