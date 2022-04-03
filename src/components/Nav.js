import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <nav className="nav centrado">
            <Link className="nav-items" to="/">HOME</Link>
            <Link className="nav-items" to="/ultimos-lanzamientos">ULTIMOS LANZAMIENTOS</Link>
            <Link className="nav-items" to="/populares">PELICULAS POPULARES</Link>
            <Link className="nav-items" to="/buscador">BUSCAR</Link>
        </nav>
    )
}

export default Nav 