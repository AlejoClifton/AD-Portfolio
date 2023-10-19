import './sectionHeader.scss';
import { BorderBottom } from '@/assets';

const SectionHeader = ({ text, title, bool = true }) => {
    if (!bool) {
        return (
            <div className="sectionSubHeader">
                <p>{text}</p>
                <h3>{title}</h3>
            </div>
        );
    }

    return (
        <div className="sectionHeader">
            <h2>{title}</h2>
            <BorderBottom />
        </div>
    );
};

export default SectionHeader;
