import { Layout } from './Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import  userAuthOperations  from '../redux/userAuth/userAuth-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Contacts } from 'Contacts/Contacts';


export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthOperations.getCurrentUser())
    }, [dispatch]);

        return(
            <>
                <Routes>
                    <Route path='/' element={<Layout/>}>

                        <Route path='register' element={<RegistrationForm />} />
                        
                        <Route path='login' element={ <LogInForm/>} />

                        <Route path='contacts' element={ <Contacts/>  } />  
                        
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>

        </>
    )
}
