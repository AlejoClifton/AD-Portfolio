import Experience from './sections/experience/Experience';
import Form from './sections/Form';
import Portfolio from './sections/Portfolio';
import SectionOne from './sections/sectionOne/SectionOne';
import { MainContainer } from '@/styled-components/components/sc-main';

const Main = () => {
    return (
        <MainContainer>
            <SectionOne />
            <Experience />
            <Portfolio />
            <Form />
        </MainContainer>
    );
};

export default Main;
