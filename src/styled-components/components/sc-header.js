import { styled } from 'styled-components';
import { mobile, tablet, laptop, desktop } from '../utils/media';
import { colors } from '../utils/colors';

export const HeaderContainer = styled.header`
    background-image: url('header.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    width: 100%;
`;

export const HeaderContent = styled.div`
    width: 60%;
    margin: 0 auto;

    h1,
    h2 {
        text-align: center;
    }

    h1 {
        color: ${colors.title};
        font-size: 28px;

        ${tablet(`
            font-size: 32px;
        `)}

        ${laptop(`
            font-size: 48px;
        `)}
    }
    h2 {
        color: ${colors.subtitle};
        font-size: 18px;

        ${tablet(`
            font-size: 24px;
        `)}

        ${laptop(`
            font-size: 32px;
        `)}
    }

    div {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;

        img {
            height: 250px;
            width: 250px;
        }
    }
`;
