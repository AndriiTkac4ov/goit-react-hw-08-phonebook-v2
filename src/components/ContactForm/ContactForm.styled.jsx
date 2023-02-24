import styled from 'styled-components';

export const Form = styled.form`
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 16px;
    padding: 8px;
`;

export const LabelField = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-size: ${props => props.theme.spacing(2)};
    font-weight: 500;
    line-height: 1.2;
`;

export const InputField = styled.input`
    padding: 12px;
    font-size: ${props => props.theme.spacing(2)};
    line-height: 1.2;
    border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(1)};
    width: 292px;
    cursor: pointer;
`;

export const ButtonAdding = styled.button`
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