import axios from "axios"
import { useEffect,useState } from "react"


const ResidentInfo = ({residentData}) =>  {

    useEffect (()=>{
        axios
        .get (residentData)
        .then(resp => {console.log(resp.data)
         setdetail(resp.data)         
        })
        .catch ( error => console.error(error) )
        },[])

    const [detail, setdetail]=useState({})

    /*useEffect (()=>{
        axios
        .get (`residentData`)
        .then(resp => {console.log(resp.data)
            setdetail(resp.data)
        })
        .catch ( error => console.error(error) )
        },[id]) */


    return (
        <div className="card">
        <li >
             
              <h1> </h1>
               <h3>Name:{detail.name}</h3>
                <img src={detail.image} alt="" />
               <h3>Especie:{detail.species} </h3>
               <h3>Genero: {detail.gender}</h3>
               <h3>Status: {detail.status}</h3>
               <h3>Place of Origin: {detail.origin?.name}</h3>
              <hr />
               <br />
        </li>
        </div>
        )
       
}
export default ResidentInfo