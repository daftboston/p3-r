import { useEffect, useState } from 'react'
import './App.css'

import axios from "axios"
import ResidentInfo from './components/ResidentInfo'
import Location from './components/Location'





function App() {

 




const [id, setId]= useState ("5")

const[arrayResidentUrl, setArrayResidentUrl]=useState([])
//console.log(arrayResidentUrl);

useEffect (()=>{
axios
.get (`https://rickandmortyapi.com/api/location/${id}`)
.then(resp => {
 setId(resp.data)
// console.log(resp.data.residents);
 
setArrayResidentUrl(resp.data.residents)})
.catch ( error => console.error(error) )
},[id])


const searchId = (e)=>{
    e.preventDefault()
    //console.log(e.target[0].value);
    setId(e.target[0].value)

}


  return (
  <div className="App"
  >
    <img src="/images/head.png" alt="" />
    <div className='head'>
      
     <div className='search'>
          <form onSubmit={ (e)=> searchId (e)}>
    
           <input type="number" placeholder='Search location by id' 
           min="1"
           max="126"/>
           <button>Search</button>

          </form>
          <Location data={id}/>
      </div>
    </div>
     
    <div className='body' >   
       <ul>
           <div className='container'>
                 {
                   arrayResidentUrl.map(resident=>(
                     <ResidentInfo key= {resident}  residentData = {resident} />
                   ))
                 }
          </div>
       
       </ul>
     </div>
     
    <img src="/images/bottom.png" alt="" />
   
   


      

       
   
   
    </div>
  )
}

export default App


