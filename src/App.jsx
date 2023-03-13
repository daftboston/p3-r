import { useEffect, useState } from 'react'
import './App.css'

import axios from "axios"
import ResidentInfo from './components/ResidentInfo'
import Location from './components/Location'




function App() {

 




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
    
      <input type="text" placeholder='Search location by id' />
      <button>Search</button>

    </form>
     
     <ul>
       
      {url.map((item,indice)=> <li key={item} residentData={item}>{item}</li> )}

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


