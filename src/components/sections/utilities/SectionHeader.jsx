import { BorderBottom } from '@/assets';
import { SectionHeaderStyles } from '@/styled-components/components/sc-main';

const SectionHeader = ({ text, title, bool = true }) => {
    if (!bool) {
        return (
            <SectionHeaderStyles>
                <p>{text}</p>
                <h3>{title}</h3>
            </SectionHeaderStyles>
        );
    }

    return (
        <SectionHeaderStyles>
            <p>{text}</p>
            <h2>{title}</h2>
            <BorderBottom />
        </SectionHeaderStyles>
    );
};

export default SectionHeader;
