import { PhonebookHeader } from './Layout.styled';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

export const Layout = () => {
    return (
        <>
            <PhonebookHeader>
                <Navigation />
            </PhonebookHeader>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <ToastContainer />
        </>
    )
}