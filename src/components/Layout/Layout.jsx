import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

export const Layout = () => {
    return (
        <div style={{height: "100vh"}}>
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
            <ToastContainer />
        </div>
    )
}