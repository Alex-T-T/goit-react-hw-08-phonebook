import { Header } from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>

            <ToastContainer position="top-right"
                                autoClose={3000}
                                theme="dark"/>
        </>
    ) 
}