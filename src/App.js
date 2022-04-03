import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UltimosLanzamientos from "./components/UltimosLanzamientos";    
import PeliculasPopulares from "./components/PeliculasPopulares"
import Buscador from "./components/Buscador";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} />
        <Route path="/populares" element={<PeliculasPopulares />} />
        <Route path="/buscador" element={<Buscador />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
