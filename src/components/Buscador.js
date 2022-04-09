import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Buscador = () => {
  const [busquedaPeliculas, setBusquedaPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=d2db916ed787e45a269779c746706c07&language=es-ES&query=${searchParams.get(
        "q"
      )}`
    )
      .then((res) => res.json())
      .then((data) =>
        setBusquedaPeliculas(data.results.length > 0 && data.results)
      );
  }, [searchParams]);

  const handleChange = (e) => {
    setSearchParams({
      q: e.target.value,
    });
  };

  return (
    <>
      <div className="centrado">
        <input
          className="input-busqueda"
          placeholder="Que pelicula estas buscando?"
          type="text"
          onChange={handleChange}
          value={searchParams.get("q")}
        ></input>
      </div>
      <div className="flex-wrap centrado">
        {busquedaPeliculas.map((pelicula) => (
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
            <Link to={`/populares/${pelicula.id}`}>
              <div>
                <p className="tarjeta-boton">Mas info</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Buscador;
