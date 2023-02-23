const CardSong = ({song,genre,band,album,date}) =>{

    return (
        <div className="Card">
            <h2>{song}</h2>
            <h3>GENERO : {genre}</h3>
            <h3>BANDA: {band}</h3>
            <h3>ALBUM: {album}</h3>
            <h3>FECHA DE LANZAMIENTO: {date}</h3>
        </div>
    )
}

export default CardSong

