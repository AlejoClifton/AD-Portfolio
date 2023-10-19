import { sectionOneData } from '@/models/modelsData';

const ListTech = () => {
    return (
        <div className='listTech'>
            {sectionOneData.listSkills.map((skill) => {
                return (
                    <div key={skill.title}>
                        <div>
                            <h3>{skill.title}</h3>
                        </div>
                        {skill.list.map((item) => {
                            return (
                                <div key={item.name}>
                                    {item.icon}
                                    <p>{item.name}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default ListTech;
