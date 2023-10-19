import { sectionOneData } from '@/models/modelsData';

const ListPersonalInformation = () => {
    return (
        <div className='listPersonInformation'>
            {sectionOneData.listPersonalData.map((item) => {
                return (
                    <p key={item.title}>
                        <span>{item.title}</span> {item.value}
                    </p>
                );
            })}
        </div>
    );
};

export default ListPersonalInformation;
