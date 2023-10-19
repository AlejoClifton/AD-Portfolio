import SectionHeader from '../utilities/SectionHeader';
import { sectionExperience } from '@/models/modelsData';
import ListExperience from './ListExperience';
import './experience.scss';

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div>
                <SectionHeader text={'Who I am?'} title={'Experiencia'} />
                <div className='sections'>
                    <div>
                        <SectionHeader text={'WORK EXPERIENCE'} title={'Mi experiencia laboral'} bool={false} />
                        <ListExperience listData={sectionExperience.listExperience} type="work" />
                    </div>
                    <div className='qualification'>
                        <SectionHeader text={'QUALIFICATION'} title={'Mi educación'} bool={false} />
                        <ListExperience listData={sectionExperience.listStudent} type="student" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
