import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Estrenos from "./components/Estrenos";    
import PeliculasPopulares from "./components/PeliculasPopulares"
import Buscador from "./components/Buscador";
import Nav from "./components/Nav";
import DetallePelicula from "./components/DetallePelicula"
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top/:idPelicula" element={<DetallePelicula/>}/>
        <Route path="/actuales/:idPelicula" element={<DetallePelicula/>}/>
        <Route path="/estrenos" element={<Estrenos />} />
        <Route path="/estrenos/:idPelicula" element={<DetallePelicula/>}/>
        <Route path="/populares" element={<PeliculasPopulares />} />
        <Route path="/populares/:idPelicula" element={<DetallePelicula/>}/>
        <Route path="/buscador" element={<Buscador />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
