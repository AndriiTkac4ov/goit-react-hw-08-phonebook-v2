// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
// import { selectProfileToken } from 'redux/auth/profile/profile.selector';
// import { getProfileThunk } from 'redux/auth/profile/profile.thunk';
import UserMenu from '../UserMenu/UserMenu';
import {
    HeaderNav,
    NavItem,
} from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    // const dispatch = useDispatch();

    // const token = useSelector(selectAuthToken);

    // useEffect(() => {
    //     if (token) {
    //         dispatch(getProfileThunk());
    //     }
    // }, [token, dispatch]);
    
    // return (
    //     <HeaderNav>
    //         {token && profile ?
    //             <>
    //                 <UserMenu mail={profile.email} />
    //             </> :
    //             <>
    //                 <NavItem to='/'>Home</NavItem>
    //                 <NavItem to='/register'>Register</NavItem>
    //                 <NavItem to='/login'>Log In</NavItem>
    //             </>
    //         }
    //     </HeaderNav>
    // )

    return (
        <HeaderNav>
            {isLoggedIn ?
                <>
                    <UserMenu />
                </> :
                <>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/register'>Register</NavItem>
                    <NavItem to='/login'>Log In</NavItem>
                </>
            }
        </HeaderNav>
    )
}