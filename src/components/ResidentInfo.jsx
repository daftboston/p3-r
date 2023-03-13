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
        <li >
             
              <h1> </h1>
               <h3>status:{residentData.name}</h3>
               <h3>Especie: </h3>
               <h3>Genero: </h3>
              <hr />
               <br />
        </li>)
}
export default ResidentInfo