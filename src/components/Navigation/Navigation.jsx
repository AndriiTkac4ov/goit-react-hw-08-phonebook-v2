import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';
import {
    HeaderAuthNav,
    HeaderNav,
    NavItem,
} from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

    return (
        <>
            {isLoggedIn ?
                <HeaderAuthNav>
                    <UserMenu />
                </HeaderAuthNav> :
                <HeaderNav>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/register'>Register</NavItem>
                    <NavItem to='/login'>Log In</NavItem>
                </HeaderNav>
            }
        </>
    )
}