'use client';

import { Github, Instagram, Linkedin, Tiktok } from '@/assets/socialNetwork';
import { useState } from 'react';
import './switchMenu.scss';

const SwitchMenu = () => {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    };

    return (
        <>
            <form className="formBurger">
                <label className="burger" htmlFor="burger">
                    <input type="checkbox" id="burger" onClick={handleChecked} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </form>

            <div className={`menu-container ${checked ? 'active' : ''}`}>
                <ul className="list listUrls">
                    <li>
                        <a href="#aboutus">Quién soy</a>
                    </li>
                    <li>
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li>
                        <a href="#contact">Contáctame</a>
                    </li>
                </ul>
                <div className="list">
                    <ul className="list listSocial">
                        <li>
                            <a href="https://www.linkedin.com/in/alejo-clifton/" target="_blank">
                                <Linkedin className="othersvg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/AlejoClifton" target="_blank">
                                <Github className="othersvg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/codeclif_/?hl=es-la" target="_blank">
                                <Instagram className="othersvg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@codeclif" target="_blank">
                                <Tiktok className="othersvg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SwitchMenu;
