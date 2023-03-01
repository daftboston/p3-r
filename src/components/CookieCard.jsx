const CookieCard = ({dataCookie}) =>  {
    
    
    return (
       
<div className="container">

    <h1 className="title">GALLETAS DE LA FORTUNA</h1>
      <div className="phrase">
           <h1>{dataCookie.phrase}</h1>
      </div>
      <div className="source">
           <h2 >fuente : {dataCookie.author}</h2> 
      </div> 

</div>
)
}
export default CookieCard