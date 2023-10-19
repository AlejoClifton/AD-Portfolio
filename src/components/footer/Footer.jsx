import './footer.scss';
import Email from '../../assets/socialNetwork/Email';
import Github from '../../assets/socialNetwork/Github';
import Instagram from '../../assets/socialNetwork/Instagram';
import Linkedin from '../../assets/socialNetwork/Linkedin';
import Tiktok from '@/assets/socialNetwork/tiktok';
import { Link } from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h3>
                    Alejo <span>Clifton</span>
                </h3>
                <h4>© 2023. All Rights Reserved</h4>
            </div>
            <div>
                <a href="mailto:cliftonalejo@gmail.com">
                    <Email className="email" />
                </a>
                <a href="https://www.linkedin.com/in/alejo-clifton/" target="_blank">
                    <Linkedin className="othersvg" />
                </a>
                <a href="https://github.com/AlejoClifton" target="_blank">
                    <Github className="othersvg" />
                </a>
                <a href="https://www.instagram.com/codeclif_/?hl=es-la" target="_blank">
                    <Instagram className="othersvg" />
                </a>
                <a href="https://www.tiktok.com/@codeclif" target="_blank">
                    <Tiktok className="othersvg" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
