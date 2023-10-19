import Experience from './sections/experience/Experience';
import Contact from './sections/contact/Contact';
import Portfolio from './sections/portfolio/Portfolio';
import SectionOne from './sections/sectionOne/SectionOne';

const Main = () => {
    return (
        <main>
            <SectionOne />
            <Experience />
            <Portfolio />
            <Contact />
        </main>
    );
};

export default Main;
