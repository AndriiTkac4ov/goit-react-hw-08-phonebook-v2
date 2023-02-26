import styled from 'styled-components';

export const RegisterGroup = styled.section`
    min-height: 100%;
    margin: 0;
    padding: 16px 16px;
    text-align: center;
    background: lavender;
    color: chocolate;

    @media screen and (min-width: 768px) {
        & {
            padding: 16px 40px;
        };
    }
`;

export const RegisterTitle = styled.h2`
    margin: 0 0 8px 0;
    font-size: ${props => props.theme.spacing(3)};
    font-weight: 500;
    line-height: 1.5;
`;

export const Form = styled.form`
    width: 288px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
        & {
            width: 400px;
            padding: 8px;
        };
    }
`;

export const LabelField = styled.label`
    display: block;
    margin-bottom: 16px;
    font-size: ${props => props.theme.spacing(2)};
    font-weight: 500;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
        & {
            display: flex;
            justify-content: space-between;
            align-items: center;
        };
    }
`;

export const InputField = styled.input`
    width: 262px;
    margin-top: 8px;
    padding: 12px;
    font-size: ${props => props.theme.spacing(2)};
    line-height: 1.2;
    border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(1)};
    cursor: pointer;

    @media screen and (min-width: 768px) {
        & {
            width: 284px;
        };
    }
`;

export const ButtonAdding = styled.button`
/* toggle password */
    /* display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${props => props.theme.spacing(2)}; */
/* toggle password */
    padding: 8px 24px;
    font-size: ${props => props.theme.spacing(2)};
    font-weight: 700;
    line-height: 1.2;
    border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(1)};
    cursor: pointer;
    background: burlywood;
    color: honeydew;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background: chocolate;
        color: springgreen;
        border: 1px solid springgreen;
        transform: scale(1.1);
    }
`;