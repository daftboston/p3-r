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
            <div className="imagecontainer">
              <img  className="image" src={detail.image} alt="" />
           </div>
                <div className="name">      
                   <h3>{detail.name}</h3>
               </div>

               <div className="list">

                   <li  >               
                     <h3>
                       <span> Especie </span>{detail.species} </h3>
                     <h3>
                       <span> Gender </span> {detail.gender}</h3>
                     <h3>
                       <span>Status</span>  {detail.status}</h3>
                     <h3>
                       <span> Place of Origin</span> {detail.origin?.name}</h3>
            
                   </li>
                   </div>
            </div>
    
        )
       
}
export default ResidentInfo