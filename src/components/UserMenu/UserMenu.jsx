import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from "redux/auth/auth-operations";
import authSelectors from 'redux/auth/auth-selectors';
import {
    ProfileMenu,
    ProfileEmail,
    LogOutButton,
    LogOutIcon,
} from './UserMenu.styled';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(authSelectors.selectUserEmail);

    return (
        <ProfileMenu>
            <ProfileEmail>{userEmail}</ProfileEmail>
            <LogOutIcon size={32} onClick={() => dispatch(authOperations.logOut())}>Log out</LogOutIcon>
            <LogOutButton type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</LogOutButton>
        </ProfileMenu>
    )
}

export default UserMenu;