import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallePelicula = () => {
  const params = useParams();
  const [pelicula, setPelicula] = useState([]);

  console.log(params.idPelicula);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=d2db916ed787e45a269779c746706c07`
    )
      .then((res) => res.json())
      .then((data) => setPelicula(data));
  },);
  return (
    <>
      <div className="fondo-detalle-tarjeta">
        <img
          src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
          alt=""
        ></img>
      </div>

      <div className="centrado flex-wrap relative">
        <div className="margen-tarjetas" >
          <img className="tamanio-imagen-detalle"
            src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
            alt=""
          ></img>
        </div>

        <div className="tamanio-descripcion-detalle margen-tarjetas">
          <div>
            <h2> {pelicula.title}</h2>
          </div>

          <div>
            <h3>General</h3>
            <p>{pelicula.overview}</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default DetallePelicula;
