import styled from 'styled-components';

export const FilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 16px;
    font-size: ${props => props.theme.spacing(2)};
    font-weight: 500;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
        & {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            margin-bottom: 8px;
        };
    }
`;

export const FilterInput = styled.input`
    width: 270px;
    margin-top: 8px;
    padding: 8px;
    font-size: ${props => props.theme.spacing(2)};
    line-height: 1.2;
    border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(1)};
    cursor: pointer;

    @media screen and (min-width: 768px) {
        & {
            width: 196px;
            margin-top: 0;
        };
    }
`;