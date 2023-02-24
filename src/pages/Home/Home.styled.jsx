import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homePageBcgImg from './background-for-home-page.jpg';

export const HomeSection = styled.section`
    padding-top: 64px;
    padding-bottom: 478px;
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.2),
        rgba(47, 48, 58, 0.2)
        ),
        url(${homePageBcgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const HomePageTitle = styled.p`
    margin: 0;
    margin-bottom: 48px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: bisque;
`;

export const HomePageText = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: bisque;

    &:not(:last-child){
        margin-bottom: 24px;
    }
`;

export const HomePageLink = styled(Link)`
    color: springgreen;
    text-underline-offset: 6px;
`;