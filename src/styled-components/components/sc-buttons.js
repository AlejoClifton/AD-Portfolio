import { styled } from 'styled-components';
import { colors } from '../utils/colors';

export const ButtonContainer = styled.a`
    background-color: ${colors.backgroundButton};
    color: ${colors.subtitle};
    display: block;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    width: 200px;

    &:hover {
        background-color: ${colors.backgroundButtonHover};
        cursor: pointer;
    }
`;
