import { styled } from 'styled-components';
import { tablet, laptop, desktop } from './utils/media';
import { colors } from './utils/colors';

// Propiedades de los componentes
export const flexContainerUl = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const flexContainerDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

// Componentes
export const NavbarContainer = styled(flexContainerUl)`
    background-color: ${colors.backgroundHeader};
    left: 50%;
    list-style: none;
    padding: 15px;
    position: fixed;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    z-index: 1;

    ${laptop(`width: 40%;`)}

    li {
        color: ${colors.list};
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        margin: 0 10px;
        transition: all 0.1s ease-in-out;

        &:hover {
            color: ${colors.hoverList};
        }

        ${tablet(`font-size: 16px;`)}
    }
`;

export const LogoContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 100px 0 30px 0;

    img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
    }
`;

export const ListContainer = styled(flexContainerDiv)`
    margin-top: 30px;

    svg,
    li,
    a {
        margin: 0 10px;
    }
`;

export const SvgStyles = styled.svg`
    cursor: pointer;
    path {
        fill: ${colors.list};
    }

    &:hover {
        path {
            fill: ${colors.hoverList};
            transition: all 0.1s ease-in-out;
        }
    }
`;
