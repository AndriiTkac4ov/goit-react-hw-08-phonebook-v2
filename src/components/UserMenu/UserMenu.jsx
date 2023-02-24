import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from "redux/auth/auth-operations";
import authSelectors from 'redux/auth/auth-selectors';
import {
    ProfileMenu,
    ProfileEmail,
    LogOutButton,
} from './UserMenu.styled';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(authSelectors.selectUserEmail);

    return (
        <ProfileMenu>
            <ProfileEmail>{userEmail}</ProfileEmail>
            <LogOutButton type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</LogOutButton>
        </ProfileMenu>
    )
}

export default UserMenu;