import '@/styles/globals.css';
import '@/styles/generals.scss';

import { Lato } from 'next/font/google';
const roboto = Lato({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export const metadata = {
    title: 'Alejo Tomás Clifton Goldney',
    description: 'El portfolio de Alejo Tomás Clifton Goldney',
    keywords:
        'portfolio, alejo, clifton, goldney, alejo clifton goldney, alejo tomas clifton goldney, alejo clifton, alejo goldney, alejo tomas clifton, alejo tomas goldney, alejo clifton goldney portfolio, alejo tomas clifton goldney portfolio, alejo clifton portfolio, alejo goldney portfolio, alejo tomas clifton portfolio, alejo tomas goldney portfolio, alejo clifton goldney web developer, alejo tomas clifton goldney web developer, alejo clifton web developer, alejo goldney web developer, alejo tomas clifton web developer, alejo tomas goldney web developer, alejo clifton goldney web developer portfolio, alejo tomas clifton goldney web developer portfolio, alejo clifton web developer portfolio, alejo goldney web developer portfolio, alejo tomas clifton web developer portfolio, alejo tomas goldney web developer portfolio, alejo clifton goldney web developer site, alejo tomas clifton goldney web developer site, alejo clifton web developer site, alejo goldney web developer site, alejo tomas clifton web developer site, alejo tomas goldney web developer site, alejo clifton goldney web developer site',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
