import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Estrenos = () => {
  const [Estrenos, setEstrenos] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d2db916ed787e45a269779c746706c07&language=es-ES"
    )
      .then((res) => res.json())
      .then((data) => setEstrenos(data.results));
  }, []);

  return (
    <div className="flex-wrap centrado">
      {Estrenos.map((pelicula) => (
        <div className="tarjeta margen-tarjetas centrado-columnas">
          <div>
            <img
              className="tarjeta-imagen"
              src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
              alt=""
            ></img>
          </div>
          <div>
            <h3 className="tarjeta-titulo">{pelicula.title}</h3>
          </div>
          <Link to={`/estrenos/${pelicula.id}`}>
            <div>
              <p className="tarjeta-boton">Mas info</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Estrenos;
