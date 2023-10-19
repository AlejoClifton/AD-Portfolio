import { Javascript, NextJS, ReactSVG, Scss, NodeJS, Express, Mysql, MongoDB, PostgreSQL, SQL } from '../assets/technologies/index.js';
import { Docker, Git, Figma, Jira } from '../assets/others/index.js';

export const sectionOneData = {
    listParragraphs: [
        `¡Hola! Soy Alejo Tomás Clifton Goldney, un desarrollador full stack con 2 años de experiencia, enfocado en desarrollo web y móvil. Transformo ideas en experiencias digitales impactantes. Siempre buscando desafíos y aprendizaje continuo. ¡Creemos algo increíble juntos!`,
    ],
    listPersonalData: [
        // {
        //     title: 'Número:',
        //     value: '+54 9 11 2387-1729.',
        // },
        {
            title: 'Experiencia:',
            value: '+2 años.',
        },
        {
            title: 'Cuidad:',
            value: 'Buenos Aires, Argentina.',
        },
        {
            title: 'Email:',
            value: 'codeclif.contact@gmail.com.',
        },
    ],
    listSkills: [
        {
            title: 'Frontend',
            list: [
                { name: 'Javascript', icon: <Javascript /> },
                { name: 'Next JS', icon: <NextJS /> },
                { name: 'React', icon: <ReactSVG /> },
                { name: 'React Native', icon: <ReactSVG /> },
                { name: 'Scss', icon: <Scss /> },
            ],
        },
        {
            title: 'Backend',
            list: [
                { name: 'Node JS', icon: <NodeJS /> },
                { name: 'Express', icon: <Express /> },
                { name: 'MySQL', icon: <Mysql /> },
                { name: 'MongoDB', icon: <MongoDB /> },
                { name: 'PostgreSQL', icon: <PostgreSQL /> },
                { name: 'SQL', icon: <SQL /> },
            ],
        },
        {
            title: 'Others',
            list: [
                { name: 'Git', icon: <Git /> },
                { name: 'Docker', icon: <Docker /> },
                { name: 'Jira', icon: <Jira /> },
                { name: 'Figma', icon: <Figma /> },
            ],
        },
    ],
    cv: 'CV_Alejo_Tomás_Clifton_Goldney.pdf',
};

export const sectionExperience = {
    listExperience: [
        {
            title: 'Full Stack Developer. Freelancer. (01-06-2023 - present)',
            subtitle: '(01-06-2023 - present)',
            listParragraphs: [
                `
                Desarrollé una página de aterrizaje para Rosiestetica mostrando sus servicios e implementé un área de administración para gestionar citas y contenido.`,
                `Tecnologías utilizadas: NEXT JS, SCSS, Node JS, Express JS, MySQL, Docker.`,
                `Échale un vistazo en`,
            ],
            link: 'https://www.rosiestetica.com.ar/',
            text: 'www.rosiestetica.com.ar',
        },
        {
            title: 'Full Stack Developer en Sodeco.',
            subtitle: '(01-02-2023 / 01-09-2023)',
            listParragraphs: [
                `En Sodeco, me destacé como Desarrollador Fullstack, colaborando con una variedad de clientes para ofrecer soluciones integrales.`,
                `Mis logros incluyen una eficaz gestión de servidores VPS, una exitosa migración de proyectos de PHP a AngularJS y Spring Boot,
                y roles de liderazgo en varios proyectos, centrándome en código limpio y comunicación con el cliente.`,
                `Herramientas/Tecnologías: IDE: Visual Code, Next JS, React Native, SCSS, Java-Spring Boot, MySQL, Git.`,
            ],
        },
        {
            title: 'Frontend Developer en Innova - Artear (Canal 13 / TN).',
            subtitle: '(21-02-2022 / 01-02-2023)',
            listParragraphs: [
                `Durante mi tiempo en INNOVA, mejoré la experiencia del usuario y optimicé el rendimiento de los sitios web de TN y Eltrece.`,
                `Logros destacados incluyen una mejora del 25% en la velocidad de carga de fuentes, una contribución sustancial al desarrollo de 'Longform'
                para experiencias inmersivas del usuario, e integración fluida de transmisión en vivo para TN.`,
                `Para Eltrece, desempeñé un papel clave en el rediseño completo del sitio, asegurando una versión de producción de alta calidad y fácil de usar.
                Además, implementé mejoras de rendimiento antes del lanzamiento para ofrecer una experiencia óptima al usuario.`,
                `En INNOVA, identifiqué y propuse valiosas mejoras para Eltrece, que fueron muy bien recibidas por la empresa. Este período me permitió
                aprovechar mis habilidades técnicas y creativas para elevar los sitios web de TN y Eltrece.`,
                `Si tienes consultas o proyectos en mente, estoy ansioso por contribuir con mi experiencia para ayudarte a alcanzar tus objetivos.`,
                `Herramientas / Tecnologías: IDE: Visual Code, React JS, SCSS, Git, Enzyme / Jest.`,
            ],
        },
    ],
    listStudent: [
        {
            title: 'Web Developer (React-js). Coderhouse.',
            subtitle: '(2021)',
            listParragraphs: [
                `
                Completé un curso dedicado sobre React.js, donde logré un promedio de 10 y me destacé como el mejor rendimiento de la clase. También ayudé activamente y brindé apoyo a mis compañeros estudiantes.`,
            ],
        },
        {
            title: 'Desarrollo web (HTML-CSS-JS-NODEJS-EXPRESS. Brian Lara.',
            subtitle: '(2021)',
            listParragraphs: [
                `He aprendido los fundamentos del desarrollo web tanto en el front-end como en el back-end, lo que me ha permitido especializarme en este sector de programación.`,
            ],
        },
        {
            title: 'Técnico Universitario en Programación. UTN Pacheco.',
            subtitle: '(2020 - 2021)',
            listParragraphs: [
                `Aprendí a programar, estableciendo una sólida base para destacarme en la industria. Además, mantuve un promedio general de 9 en 22 cursos a lo largo de mi carrera académica.`,
            ],
        },
    ],
};

export const sectionProjects = {
    listProjects: [
        {
            id: 1,
            img: '/rosiestetica.png',
            alt: 'Rosiestetica',
            listTech: [
                { id: 1, name: 'next js' },
                { id: 2, name: 'scss' },
                { id: 3, name: 'node js' },
                { id: 4, name: 'express js' },
                { id: 5, name: 'mysql' },
                { id: 6, name: 'docker' },
            ],
            link: 'https://www.rosiestetica.com/',
        },
        {
            id: 2,
            img: '/bunji.png',
            alt: 'Bunji en progreso',
            listTech: [
                { id: 1, name: 'next js' },
                { id: 2, name: 'scss' },
                { id: 3, name: 'node js' },
                { id: 4, name: 'express js' },
                { id: 5, name: 'mysql' },
            ],
            link: 'https://alejoclifton.vercel.app/',
        },
        {
            id: 3,
            img: '/landing.png',
            alt: 'Alejo Clifton Portafolio',
            listTech: [
                { id: 1, name: 'next js' },
                { id: 2, name: 'scss' },
            ],
            link: 'https://alejoclifton.vercel.app/',
        },
    ],
};
