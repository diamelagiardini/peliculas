import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Carrousel = () => {
  const [PeliculasActuales, setPeliculasActuales] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d2db916ed787e45a269779c746706c07&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPeliculasActuales(data.results));
  }, []);

  return (
    <div className="container">
      <Slider
        dots={true}
        infinite={true}
        speed={6000}
        arrows={true}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {PeliculasActuales.map((pelicula) => (
          <div className="carrousel-home centrado">
            <img
              src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
              alt={`imagen de ${pelicula.title}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
