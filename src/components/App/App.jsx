import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import { authOperations } from "redux/auth/auth-operations";
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from "../AuthRoutes/PublicRoute";
import { PrivateRoute } from "../AuthRoutes/PrivateRoute";
import { Layout } from '../Layout/Layout';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<HomePage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='login' element={<LoginPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path='contacts' element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  )
}

export default App;