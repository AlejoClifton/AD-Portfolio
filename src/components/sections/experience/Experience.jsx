import SectionHeader from '../utilities/SectionHeader';
import { SectionContainer, ContainerExperience } from '@/styled-components/components/sc-main';
import { sectionExperience } from '@/models/modelsData';
import ListExperience from './ListExperience';

const Experience = () => {
    return (
        <SectionContainer id="experience">
            <SectionHeader text={'That I am?'} title={'My Experience'} />
            <ContainerExperience>
                <div>
                    <SectionHeader text={'WORK EXPERIENCE'} title={'My Awesome Experience'} bool={false} />
                    <ListExperience listData={sectionExperience.listExperience} type="work" />
                </div>
                <div>
                    <SectionHeader text={'QUALIFICATION'} title={'My Education'} bool={false} />
                    <ListExperience listData={sectionExperience.listStudent} type="student" />
                </div>
            </ContainerExperience>
        </SectionContainer>
    );
};

export default Experience;
