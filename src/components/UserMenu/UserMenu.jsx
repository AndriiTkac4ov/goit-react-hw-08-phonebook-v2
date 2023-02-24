import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from "redux/auth/auth-operations";
import authSelectors from 'redux/auth/auth-selectors';
// import { toast } from "react-toastify";
import {
    ProfileMenu,
    ProfileEmail,
    LogOutButton,
} from './UserMenu.styled';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(authSelectors.selectUserEmail);

    // const handleLogOut = async () => {
    //     try {
    //         await dispatch(authLogoutThunk()).unwrap();
    //         toast.success('Good bye! Hope to see you soon.');
    //     } catch (error) {
    //         console.log(error);
    //         toast.error('Something is wrong with log out.');
    //     }
    // }

    return (
        <ProfileMenu>
            <ProfileEmail>{userEmail}</ProfileEmail>
            <LogOutButton type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</LogOutButton>
        </ProfileMenu>
    )
}

export default UserMenu;