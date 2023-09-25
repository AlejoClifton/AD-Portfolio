import { styled } from 'styled-components';
import { mobile, tablet, laptop, desktop } from '../utils/media';
import { colors } from '../utils/colors';
import { flexContainerDiv, flexContainerUl } from '../sc-globals';

export const MainContainer = styled.main`
    height: 100%;
    width: 100%;
`;

export const SectionHeaderStyles = styled.header`
    display: flex;
    flex-direction: column;

    p {
        color: ${colors.textSectionSubtitle};
        font-weight: bold;
        margin-top: 36px;

        ${tablet(`margin-top: 0;`)}
    }
    h2 {
        color: ${colors.subtitle};
        font-size: 32px;
        margin-bottom: 3px;

        /* ${laptop(`padding: 200px 0;`)} */
    }
`;

export const SectionOneStyles = styled.section`
    background-color: ${colors.backgroundSectionOne};
    padding: 36px 0;

    ${tablet(`
            padding: 72px 0;
        `)}

    ${laptop(`
            padding: 200px 0;
    `)}

    main {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 90%;

        ${laptop(`flex-direction: row;`)}

        img {
            height: 500px;
            object-fit: cover;
            width: 100%;
            margin-bottom: 36px;

            ${tablet(`
                width: 400px;
                margin-right: 30px;
            `)}
        }
    }
`;

export const ContainData = styled(flexContainerDiv)`
    border: 1px solid ${colors.borderSectionOne};
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 36px 0;
    padding: 35px;
    width: 100%;

    ${laptop(`
        flex-direction: row;
        align-items: flex-start;
    `)}
`;

// Estos estilos son para la sección de habilidades (sectionOne);

export const ContainListTech = styled(flexContainerDiv)`
    align-items: center;
    border: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    ${laptop(`
        align-items: flex-start;
        flex-direction: column;
    `)}

    div {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 10px;

        &:first-child {
            width: 100%;

            ${laptop(`
                width: unset;
            `)}
        }

        h3 {
            color: ${colors.subtitle};
            font-size: 24px;
            margin-bottom: 10px;
            text-align: center;
            width: 100%;
        }
        svg {
            ${tablet(`
                margin-right: 5px;
            `)}
            ${desktop(`
                margin-right: 20px;
            `)}
        }
        p {
            color: ${colors.textSection};
            display: none;

            ${laptop(`
                display: block;
            `)}
        }
    }
`;

export const ContainPersonalData = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-around;

    ${laptop(`
        height: 350px;
    `)}

    span,
    p {
        ${desktop(`
            font-size: 24px;
        `)}
    }
    span {
        color: ${colors.subtitle};
    }
    p {
        color: ${colors.textSection};
    }
`;

export const ParrafoSection = styled.p`
    color: ${colors.textSection};
    font-size: 14px;
    margin: 16px 0;

    ${tablet(`
        font-size: 18px;
    `)}

    ${laptop(`
        font-size: 20px;
        margin: 36px 0;
    `)}

    ${laptop((props) => (props.$parraf ? 'font-size: 16px; margin: 18px auto 0 auto;' : 'font-size: 24px;'))}

    a {
        color: ${colors.list};
        margin-left: 5px;
        text-decoration: none;
        transition: all 0.1s ease-in-out;

        &:hover {
            color: ${colors.hoverList};
        }
    }
`;

export const SectionContainer = styled.section`
    background-color: ${colors.backgroundSectionTwo};

    ${tablet(`padding: 72px 0;`)}

    ${laptop(`padding: 100px 0;`)}

    ${(prop) => prop.$isthree && `background-color: ${colors.backgroundSectionThreee};`}

    > header {
        margin: 0 auto;
        width: 90%;
    }

    > main {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 auto;
        width: 90%;
    }
`;

//Estos estilos son para la sección de proyectos
export const ContainListProjects = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto 0 auto;
    width: 90%;

    ${laptop(`
        flex-direction: row;
        margin: 50px auto 0 auto;
    `)}

    > div {
        ${tablet(`
            margin: 0 10px;
        `)}

        ${laptop(`
            width: calc(100% / 3);
        `)}

        div {
            position: relative;

            img {
                object-fit: cover;
                width: 100%;
                min-height: 200px;
                max-height: 200px;

                ${tablet(`
                    max-height: 300px;
                    min-height: 200px;
                `)}

                ${laptop(`
                    height: 300px;
                    max-height: 300px;
                `)}
            }

            > div {
                align-items: center;
                background-color: ${colors.backgroundSectionTwo};
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                margin-top: 5px;
                width: 100%;

                ${laptop(`
                    height: 20%;
                    left: 50%;
                    margin-top: 0;
                    opacity: 0;
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
                    visibility: hidden;
                `)}
            }

            &:hover {
                > div {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }

        a {
            background-color: ${colors.list};
            color: ${colors.textSectionSubtitle};
            display: block;
            margin: 10px 0 50px 0;
            padding: 10px 20px;
            text-align: center;
            transition: all 0.1s ease-in-out;

            ${laptop(`margin: 0 0 20px 0;`)}

            &:hover {
                background-color: ${colors.hoverList};
                color: ${colors.subtitle};
            }
        }
    }
`;

export const ContainerExperience = styled(flexContainerDiv)`
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;

    ${tablet(`margin-top: 50px;`)}

    ${laptop(`
        width: 60%;
        margin: 50px auto 0 auto;
        flex-direction: row;
    `)}

    header {
        margin-bottom: 30px;

        ${laptop(`margin-bottom: 50px;`)}

        h3 {
            color: ${colors.subtitle};
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        > div {
            display: flex;
            flex-direction: column;

            > div {
                display: flex;
                flex-direction: row;
                margin-bottom: 30px;

                ${laptop(`
                    margin: 0 30px 30px 0;
                `)}

                aside {
                    margin-right: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    div {
                        width: 2px;
                        height: calc(100% - 30px);
                        background-color: ${colors.borderExperience};
                    }
                }

                h4 {
                    font-size: 16px;
                    color: ${colors.subtitle};

                    span {
                        color: ${colors.textSection};
                    }
                }
            }
        }
    }
`;

//Estos estilos son para la sección de formulario
export const FormContainer = styled.form`
    background-color: ${colors.backgroundSectionTwo};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 90%;

    ${laptop(`flex-direction: row;`)}

    header {
        background-color: ${colors.backgroundSectionThreee};
        height: 100%;
        margin-top: 20px;
        padding: 30px;
        width: 100%;

        ${laptop(`
            margin-top: 0;
            width: 50%;
        `)}

        h2 {
            color: ${colors.subtitle};
            font-size: 24px;
            margin-bottom: 20px;

            ${tablet(`font-size: 32px;`)}

            ${laptop(`font-size: 48px;`)}
        }
        p {
            color: ${colors.textSection};
            font-size: 16px;
            font-weight: bold;

            ${tablet(`font-size: 18px;`)}

            ${laptop(`font-size: 20px;`)}
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        width: 100%;

        ${laptop(`
            margin-top: unset;
            margin-left: 50px;
            width: 40%;
        `)}

        > div {
            margin-bottom: 20px;

            label {
                color: ${colors.subtitle};
                font-size: 24px;
                width: 100%;
            }

            input {
                background-color: ${colors.subtitle};
                border-radius: 10px;
                border: none;
                color: ${colors.backgroundSectionOne};
                margin-top: 10px;
                padding: 15px;
                width: 100%;
            }

            textarea {
                background-color: ${colors.subtitle};
                border-radius: 10px;
                border: none;
                height: 200px;
                margin-top: 10px;
                padding: 15px;
                width: 100%;
            }
        }
        > input {
            background-color: ${colors.backgroundButton};
            border-radius: 10px;
            border: none;
            color: ${colors.subtitle};
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 20px;
            padding: 10px;
            transition: all 0.1s ease-in-out;
            width: 30%;

            &:hover {
                background-color: ${colors.backgroundButtonHover};
            }
        }
    }
`;
