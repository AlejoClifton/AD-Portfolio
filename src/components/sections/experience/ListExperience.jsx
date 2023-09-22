import { Work, Student } from '@/assets';
import { ParrafoSection } from '@/styled-components/components/sc-main';

const ListExperience = ({ listData, type }) =>
    listData.map((item, index) => {
        return (
            <div key={index}>
                <div>
                    <aside>
                        {type === 'work' ? <Work /> : <Student />}
                        <div></div>
                    </aside>
                    <div>
                        <h4>
                            {item.title} <span>{item.subtitle}</span>
                        </h4>
                        {item.listParragraphs.map((item) => {
                            if (item === 'Check it out at') {
                                return (
                                    <ParrafoSection $parraf key={item}>
                                        {item}
                                        <a href="https://rosiestetica.com/" target="_blank" rel="noopener noreferrer">
                                            www.rosiestetica.com
                                        </a>
                                    </ParrafoSection>
                                );
                            }

                            return (
                                <ParrafoSection $parraf key={item}>
                                    {item}
                                </ParrafoSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    });

export default ListExperience;
