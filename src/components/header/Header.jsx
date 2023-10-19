import './header.scss';
import SwitchMenu from '@/utils/SwitchMenu/SwitchMenu';
import FondoHeaderSVG from '@/assets/FondoHeaderSVG';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbarContainer">
                <h2>
                    Alejo <span>Clifton</span>
                </h2>
                <SwitchMenu />
            </nav>
            <div className="headerContainer">
                <div className="textContainer">
                    <span className="buttonDetail">Full-Stack Developer</span>
                    <h1>Transformando Ideas en Sitios Web</h1>
                    <p>Construyendo experiencias web únicas. Desarrollador fullstack apasionado por la innovación y la creatividad.</p>
                    <a href="#contact">CHARLEMOS</a>
                </div>
                <div className="logoContainer">
                    <img src="/imagenPerfil.jpg" alt="Mi foto" />
                </div>
            </div>
            <FondoHeaderSVG className="svgHeader" />
        </header>
    );
};

export default Header;
