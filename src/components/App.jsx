import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Header } from './Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  userAuthOperations  from '../redux/userAuth/userAuth-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthOperations.getCurrentUser())
    }, [dispatch]);

        return(
            <>
                <Header/>

                <Form />   
        
                <Filter />

                <ContactList />

                <ToastContainer position="top-right"
                                autoClose={3000}
                                theme="dark"/>
        </>
    )
}

