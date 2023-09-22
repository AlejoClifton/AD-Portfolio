import { sectionOneData } from '@/utils/modelsData';
import { ContainData, ContainListTech, ContainPersonalData } from '@/styled-components/components/sc-main';

const ListTech = () => {
    return (
        <ContainData>
            {sectionOneData.listSkills.map((skill) => {
                return (
                    <ContainListTech key={skill.title}>
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
                    </ContainListTech>
                );
            })}
            <ContainPersonalData>
                {sectionOneData.listPersonalData.map((item) => {
                    return (
                        <p key={item.title}>
                            <span>{item.title}</span> {item.value}
                        </p>
                    );
                })}
            </ContainPersonalData>
        </ContainData>
    );
};

export default ListTech;
