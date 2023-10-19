import './portfolio.scss';
import SectionHeader from '../utilities/SectionHeader';
import { sectionProjects } from '@/models/modelsData';

const Portfolio = () => {
    return (
        <div id="projects" className="portfolio wrapper">
            <SectionHeader text={'What i Did'} title={'Últimos trabajos'} />
            <div className="containProjects">
                {sectionProjects.listProjects.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>
                                <div className='titleContainer'>
                                    <h3>{item.alt}</h3>
                                    <ul>
                                        {item.listTech.map((item) => {
                                            return <li key={item.id}>{item.name}</li>;
                                        })}
                                    </ul>
                                </div>
                                <img src={item.img} alt={item.alt} />
                            </div>
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="buttonDetail">
                                    Ver proyecto
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;
