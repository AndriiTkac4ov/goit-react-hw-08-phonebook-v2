import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderAuthNav = styled.nav`
    /* display: block; */

    /* @media screen and (min-width: 768px) {
        & {
            display: flex;
            justify-content: space-between;
            align-items: center;
        };
    }; */
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavItem = styled(NavLink)`
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    color: bisque;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover:not(.active),
    &:focus:not(.active) {
        color: springgreen;
        transform: scale(1.15);
    }

    &.active {
        text-decoration: underline bisque;
        text-underline-offset: 6px;
    }

    @media screen and (min-width: 768px) {
        &:first-child {
            margin-right: auto;
        };

        &:last-child {
            margin-left: ${props => props.theme.spacing(6)};
        };
    }
`;