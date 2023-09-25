'use client';

import ListTech from './ListTech';
import SectionHeader from '../utilities/SectionHeader';
import { ButtonContainer } from '@/styled-components/components/sc-buttons';
import { SectionOneStyles, ParrafoSection } from '@/styled-components/components/sc-main';
import { sectionOneData } from '@/models/modelsData';

const SectionOne = () => {
    return (
        <SectionOneStyles id="aboutus">
            <main>
                <div>
                    <img src="/imagenX.webp" alt="Imagen por defecto" />
                </div>
                <div>
                    <SectionHeader text={'Discover'} title={'About Me'} />
                    <ParrafoSection>{sectionOneData.listParragraphs[0]}</ParrafoSection>
                    <ListTech />
                    <ButtonContainer href={`/${sectionOneData.cv}`} download={`${sectionOneData.cv}`}>
                        Download CV
                    </ButtonContainer>
                </div>
            </main>
        </SectionOneStyles>
    );
};

export default SectionOne;
