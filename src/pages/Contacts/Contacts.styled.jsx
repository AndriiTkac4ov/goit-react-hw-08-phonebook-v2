import styled from 'styled-components';

export const ContactsGroup = styled.div`
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

export const AppTitle = styled.h1`
    margin: 0 0 16px 0;
    font-size: ${props => props.theme.spacing(4)};
    font-weight: 700;
    line-height: 1.5;
`;

export const ContactsTitle = styled.h2`
    margin: 0 0 8px 0;
    font-size: ${props => props.theme.spacing(3)};
    font-weight: 500;
    line-height: 1.5;
`;