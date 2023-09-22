import { css } from 'styled-components';

const size = {
    tablet: '768px',
    laptop: '1024px',
    desktop: '1367px',
};

export const mobile = (inner) => css`
    @media (max-width: ${size.mobile}) {
        ${inner};
    }
`;
export const tablet = (inner) => css`
    @media (min-width: ${size.tablet}) {
        ${inner};
    }
`;

export const laptop = (inner) => css`
    @media (min-width: ${size.laptop}) {
        ${inner};
    }
`;

export const desktop = (inner) => css`
    @media (min-width: ${size.desktop}) {
        ${inner};
    }
`;
