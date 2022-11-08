import { Layout } from './Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import  userAuthOperations  from '../redux/userAuth/userAuth-operations';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Contacts } from 'Contacts/Contacts';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';


export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthOperations.getCurrentUser())
    }, [dispatch]);

        return(
            <>
                <Routes>
                    <Route path='/' element={<Layout/>}>

                        <Route element={<PublicRoute/>}>
                            <Route path='register' element={<RegistrationForm />} />
                            <Route path='login' element={ <LogInForm/>} />
                        </Route>
                        
                        <Route element={<PrivateRoute/>}>
                            <Route path='contacts' element={  <Contacts/>} />
                        </Route>
                        
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>

        </>
    )
}
