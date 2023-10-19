import './sectionOne.scss';
import ListPersonalInformation from './ListPersonalInformation';
import ListTech from './ListTech';
import SectionHeader from '../utilities/SectionHeader';
import { sectionOneData } from '@/models/modelsData';

const SectionOne = () => {
    return (
        <div id="aboutus" className="sectionOne wrapper">
            <SectionHeader text={'Discover'} title={'Quién soy'} />
            <p>{sectionOneData.listParragraphs[0]}</p>
            <ListTech />
            <a href={`/${sectionOneData.cv}`} download={`${sectionOneData.cv}`} className="buttonDetail">
                Download CV
            </a>
            <ListPersonalInformation />
        </div>
    );
};

export default SectionOne;
