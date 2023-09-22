'use client';

import React from 'react';
import { Link } from 'next/link';
import Instagram from '../assets/socialNetwork/Instagram';
import Github from '../assets/socialNetwork/Github';
import Linkedin from '../assets/socialNetwork/Linkedin';
import Email from '../assets/socialNetwork/Email';

import { FooterContainer } from '../styled-components/components/sc-footer';

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <a href="mailto:cliftonalejo@gmail.com">
                    <Email />
                </a>
                <a href="https://www.linkedin.com/in/alejo-clifton/" target="_blank">
                    <Linkedin />
                </a>
                <a href="https://github.com/AlejoClifton" target="_blank">
                    <Github />
                </a>
                <a href="https://www.instagram.com/aleeclifton/?hl=es-la" target="_blank">
                    <Instagram />
                </a>
            </div>
            <p>❤️Created by Alejo Clifton</p>
        </FooterContainer>
    );
};

export default Footer;
