import styled from 'styled-components';

export const ContactsList = styled.ul`
    width: 288px;
    padding: 0;
    margin: 0 auto;
    text-align: start;
    list-style: none;
    /* border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(1)}; */

    @media screen and (min-width: 768px) {
        & {
            width: 400px;
            padding: 8px;
        };
    }
`;