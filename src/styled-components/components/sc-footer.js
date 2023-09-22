import { styled } from 'styled-components';
import { colors } from '../utils/colors';

export const FooterContainer = styled.footer`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.backgroundSectionOne};

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        a {
            color: ${colors.textSectionSubtitle};
            margin: 0 10px;
            padding: 10px;

            .email {
                &:hover {
                    path {
                        stroke: ${colors.hoverList};
                    }
                    rect{
                        stroke: ${colors.hoverList};
                    }
                }
            }
        }
    }
    p {
        margin: 20px;
        color: ${colors.textSection};
    }
`;
