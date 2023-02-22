import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from "redux/auth/auth-operations";
import authSelectors from 'redux/auth/auth-selectors';
// import { toast } from "react-toastify";
import {
    ProfileMenu,
    ProfileEmail,
    LogOutButton,
} from './UserMenu.styled';

const UserMenu = ({ mail }) => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

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
            <ProfileEmail>{name}</ProfileEmail>
            <LogOutButton type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</LogOutButton>
        </ProfileMenu>
    )
}

export default UserMenu;