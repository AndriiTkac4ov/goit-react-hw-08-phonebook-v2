import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

export const PrivateRoute = () => {
    const token = useSelector(authSelectors.selectIsLoggedIn);

    return token ? <Outlet /> : <Navigate to='/' replace />;
}