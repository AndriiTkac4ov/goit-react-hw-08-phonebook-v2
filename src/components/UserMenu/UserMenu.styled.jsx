import styled from 'styled-components';
import { RiLogoutBoxLine } from "react-icons/ri";

export const ProfileMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        & {
            margin-left: auto;
        };
    };
`;

export const ProfileEmail = styled.p`
    margin: 0;
    font-size: ${props => props.theme.spacing(2.5)};
    font-weight: 700;
    line-height: 1.5;
    color: bisque;

    @media screen and (min-width: 768px) {
        & {
            margin: 0 36px 0 0;
        };
    };
`;

export const LogOutButton = styled.button`
    display: none;

    @media screen and (min-width: 768px) {
        & {
            display: block;
            padding: 4px 24px;
            font-size: ${props => props.theme.spacing(2.5)};
            font-weight: 700;
            line-height: 1.2;
            border: 1px solid chocolate;
            border-radius: ${props => props.theme.spacing(3)};
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
            };
        };
    };
`;

export const LogOutIcon = styled(RiLogoutBoxLine)`
    cursor: pointer;
    color: bisque;
    transition: color 0.25s ease-in-out;

    &:hover,
    &:focus {
        color: springgreen;
    };

    @media screen and (min-width: 768px) {
        & {
            display: none;
        };
    };
`;