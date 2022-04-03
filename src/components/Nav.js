import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/ultimos-lanzamientos">ULTIMOS LANZAMIENTOS</Link>
            <Link to="/populares">PELICULAS POPULARES</Link>
            <Link to="/buscador">BUSCAR</Link>
        </nav>
    )
}

export default Nav 