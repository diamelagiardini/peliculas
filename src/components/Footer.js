import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer centrado-footer">
        <div>
            {/* faltan aria labels aca  */}
            <a className="redes github" href="https://github.com/diamelagiardini"><FiGithub/></a>
            <a className="redes linkedin" href="https://www.linkedin.com/in/diamelagiardini/"><FiLinkedin/></a>
            <a className="redes twitter" href="https://twitter.com/diame_gi"><FiTwitter/></a>
        </div>
            

            <div>
                <p>Hecho con amor por Diame <span className="pochoclo">🍿</span></p>
            </div>
        </footer>
    )
}

export default Footer