const Location = ({data}) =>  {
    return (
<div className="location">
    <h1> {data?.name}</h1>
    <h2>Type: {data?.type}</h2>
    <h2>Dimension: {data.dimension}</h2>
    <h2>Poblation: {data.residents?.length}</h2>  

</div>
)
}
export default Location