import Github from '@/assets/socialNetwork/Github';
import Instagram from '@/assets/socialNetwork/Instagram';
import Linkedin from '@/assets/socialNetwork/Linkedin';
import { HeaderContainer, HeaderContent } from '@/styled-components/components/sc-header';
import { NavbarContainer, LogoContainer, ListContainer } from '@/styled-components/sc-globals';

const Header = () => {
    return (
        <HeaderContainer>
            <nav>
                <NavbarContainer>
                    <li>
                        <a href="#aboutus">About Us</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </NavbarContainer>
            </nav>
            <HeaderContent>
                <LogoContainer>
                    <img src="/imagenblanca.jpg" alt="Mi foto" />
                </LogoContainer>
                <h1>Alejo Tomás Clifton Goldney</h1>
                <h2>Full Stack Developer</h2>
                <ListContainer>
                    <a href="https://www.linkedin.com/in/alejo-clifton/" target="_blank">
                        <Linkedin />
                    </a>
                    <a href="https://github.com/AlejoClifton" target="_blank">
                        <Github />
                    </a>
                    <a href="https://www.instagram.com/aleeclifton/?hl=es-la" target="_blank">
                        <Instagram />
                    </a>
                </ListContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
