import { Work, Student } from '@/assets';

const ListExperience = ({ listData, type }) =>
    listData.map((item, index) => {
        return (
            <div key={index} className="information">
                <aside>
                    {type === 'work' ? <Work /> : <Student />}
                    <div></div>
                </aside>
                <div>
                    <h4>
                        {item.title} <span>{item.subtitle}</span>
                    </h4>
                    {item.listParragraphs.map((item) => {
                        if (item === 'Échale un vistazo en') {
                            return (
                                <p key={item}>
                                    {item}
                                    <a href="https://rosiestetica.com/" target="_blank" rel="noopener noreferrer">
                                        www.rosiestetica.com
                                    </a>
                                </p>
                            );
                        }

                        return <p key={item}>{item}</p>;
                    })}
                </div>
            </div>
        );
    });

export default ListExperience;
