import SectionHeader from './utilities/SectionHeader';
import { Fragment } from 'react';
import { SectionContainer, ContainListProjects } from '@/styled-components/components/sc-main';
import { sectionProjects } from '@/models/modelsData';

const Portfolio = () => {
    return (
        <SectionContainer id="projects" $isthree>
            <SectionHeader text={'What i Did'} title={'My Projects'} />
            <ContainListProjects>
                {sectionProjects.listProjects.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>
                                <img src={item.img} alt={item.alt} />
                                <div>
                                    {item.listTech.map((item) => {
                                        return <Fragment key={item.id}>{item.icon}</Fragment>;
                                    })}
                                </div>
                            </div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.text}
                            </a>
                        </div>
                    );
                })}
            </ContainListProjects>
        </SectionContainer>
    );
};

export default Portfolio;
