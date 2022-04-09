import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Footer from "./Footer";
import Carrousel from "./Carrousel";

const Home = () => {
  const [topPeliculas, setTopPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d2db916ed787e45a269779c746706c07&language=es-ES"
    )
      .then((res) => res.json())
      .then((data) => setTopPeliculas(data.results));
  }, []);

  const [PeliculasActuales, setPeliculasActuales] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d2db916ed787e45a269779c746706c07&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPeliculasActuales(data.results));
  }, []);
  return (
    <>
      <Carrousel />

      <div className="componentes-home centrado flex-wrap">
        <div className="panel-home margen-tarjetas">
          <div className="titulo-panel">TOP PELICULAS</div>
          <div>
            {topPeliculas.map((pelicula) => (
              <div className="flex space-between items-panel-home">
                <p>{pelicula.title}</p>
                <Link to={`/top/${pelicula.id}`}>
                  <p className="panel-mas-info">
                    <FiArrowRight />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div></div>

        <div className="panel-home margen-tarjetas">
          <div className="titulo-panel">PELICULAS ACTUALES</div>
          <div>
            {PeliculasActuales.map((pelicula) => (
              <div className="flex space-between items-panel-home">
                <p>{pelicula.title}</p>
                <Link to={`/actuales/${pelicula.id}`}>
                  <p className="panel-mas-info">
                    <FiArrowRight />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
