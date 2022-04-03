import { useState, useEffect } from "react"


const Estrenos = () => {

    const [Estrenos, setEstrenos] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d2db916ed787e45a269779c746706c07&language=en-US")
        .then(res => res.json())
        .then(data => setEstrenos(data.results))
    },[])

    return (
        <div className="flex-wrap centrado">
            {Estrenos.map(pelicula => 
            <div className="tarjeta margen-tarjetas centrado-columnas">
                <div>
                    <img className="tarjeta-imagen" src= {`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} alt=""></img>
                </div>
                <div><h3 className="tarjeta-titulo">{pelicula.title}</h3></div>
                <div><button className="tarjeta-boton">Mas info</button></div>
            </div>)}
        </div>
    )
}

export default Estrenos