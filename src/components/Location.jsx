const Location = ({data}) =>  {
    return (
<div>
    <h1> {data?.name}</h1>
    <h2>Tipo: {data?.type}</h2>
    <h2>{data.dimension}</h2>
    <h2>Cantidad de residentes {data.residents?.length}</h2>

    

</div>
)
}
export default Location