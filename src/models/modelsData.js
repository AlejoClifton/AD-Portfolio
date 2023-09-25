import { Javascript, NextJS, ReactSVG, Scss, StyledComponent, NodeJS, Express, Mysql, MongoDB, PostgreSQL, SQL } from '../assets/technologies/index.js';
import { Docker, Git, Figma, Jira } from '../assets/others/index.js';

export const sectionOneData = {
    listParragraphs: [
        `Hello! I'm Alejo Tomás Clifton Goldney, a full stack developer with 2 years of experience, focused on web and mobile development. I
        transform ideas into impactful digital experiences. Always seeking challenges and continuous learning. Let's create something
        amazing together!`,
    ],
    listPersonalData: [
        {
            title: 'Phone:',
            value: '+54 9 11 2387-1729.',
        },
        {
            title: 'Experience:',
            value: '+2 years.',
        },
        {
            title: 'City:',
            value: 'Buenos Aires, Argentina.',
        },
        {
            title: 'Email:',
            value: 'cliftonalejo@gmail.com.',
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
                { name: 'Styled Components', icon: <StyledComponent /> },
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
                I developed a Landing Page for Rosiestetica showcasing their services and implemented an admin area for appointment and
                content management.`,
                `Utilized technologies: NEXT JS, SCSS, Node JS, Express JS, MySQL, Docker.`,
                `Check it out at`,
            ],
            link: 'https://www.rosiestetica.com.ar/',
            text: 'www.rosiestetica.com.ar',
        },
        {
            title: 'Full Stack Developer at Sodeco.',
            subtitle: '(01-02-2023 / 01-09-2023)',
            listParragraphs: [
                `At Sodeco, I excelled as a Fullstack Developer, partnering with a variety of clients to deliver comprehensive solutions.`,
                `My achievements include effective VPS server management, successful project migration from PHP to AngularJS and Spring Boot,
                and leadership roles in multiple projects with a focus on clean code and client communication.`,
                `Tools/Technologies: IDE: Visual Code Next JS React Native SCSS Java-Spring Boot MySQL Git"`,
            ],
        },
        {
            title: 'Frontend Developer at Innova - Artear (Canal 13 / TN).',
            subtitle: '(21-02-2022 / 01-02-2023)',
            listParragraphs: [
                `During my tenure at INNOVA, I enhanced user experience and optimized performance for TN and Eltrece websites.`,
                `Notable achievements include a 25% improvement in font loading speed, substantial contribution to 'Longform' development for
                immersive user experiences, and seamless integration of live streaming for TN.`,
                `For Eltrece, I played a key role in a ground-up site redesign, ensuring a high-quality, user-friendly production version.
                Additionally, I implemented performance enhancements pre-launch to deliver an optimal user experience.`,
                `At INNOVA, I identified and proposed valuable improvements for Eltrece, well-received by the company. This period allowed me
                to leverage my technical and creative skills to elevate TN and Eltrece websites.`,
                `If you have inquiries or projects in mind, I'm eager to contribute my experience to help you achieve your goals.`,
                `Tools / Technologies: IDE: Visual Code React JS SCSS Git Enzyme / Jest`,
            ],
        },
    ],
    listStudent: [
        {
            title: 'Web Developer (React-js). Coderhouse.',
            subtitle: '(2021)',
            listParragraphs: [
                `I completed a dedicated course on React.js, where I achieved an average of 10 and stood as the top performer in the class. I
                also actively assisted and supported fellow students.`,
            ],
        },
        {
            title: 'Desarrollo web (HTML-CSS-JS-NODEJS-EXPRESS. Brian Lara.',
            subtitle: '(2021)',
            listParragraphs: [
                `I've learned the fundamentals of web development on both the front-end and back-end, enabling me to specialize in this
            programming sector.`,
            ],
        },
        {
            title: 'Técnico Universitario en Programación. UTN Pacheco.',
            subtitle: '(2020 - 2021)',
            listParragraphs: [
                `I learned to code, establishing a strong foundation to excel in the industry. Additionally, I maintained an overall GPA of 9
                across 22 courses in my academic career.`,
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
                { id: 1, icon: <NextJS /> },
                { id: 2, icon: <Scss /> },
                { id: 3, icon: <NodeJS /> },
                { id: 4, icon: <Express /> },
                { id: 5, icon: <Mysql /> },
                { id: 6, icon: <Docker /> },
            ],
            link: 'https://www.rosiestetica.com/',
            text: 'www.rosiestetica.com',
        },
        {
            id: 2,
            img: '/bunji.png',
            alt: 'Bunji',
            listTech: [
                { id: 1, icon: <NextJS /> },
                { id: 2, icon: <StyledComponent /> },
                { id: 3, icon: <NodeJS /> },
                { id: 4, icon: <Express /> },
                { id: 5, icon: <Mysql /> },
            ],
            link: '',
            text: 'Bunji, still in progress, gaining mastery.',
        },
        {
            id: 3,
            img: '/imagenblanca.jpg',
            alt: 'Anahi LandingPage',
            listTech: [
                { id: 1, icon: <NextJS /> },
                { id: 2, icon: <StyledComponent /> },
            ],
            link: '',
            text: 'Anahí Landing Page, in development.',
        },
    ],
};
