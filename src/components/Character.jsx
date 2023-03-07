const Character = ({characterdata}) =>  {
    return (
        <li key = {characterdata.name}>
              <img src={characterdata.image} alt="" />
              <h1>{characterdata.name}</h1>
               <h3>status: {characterdata.status}</h3>
               <h3>Especie: {characterdata.species}</h3>
               <h3>Genero: {characterdata.gender}</h3>
              <hr />
               <br />
        </li>)
}
export default Character