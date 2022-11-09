import css from '../ContactItem/ContactItem.module.css';
import React from 'react';
import PropTypes from 'prop-types'
import { useRemoveContactMutation } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

export const ContactItem = ({ id, name, number }) => {
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [removeContact, removeContactResult] = useRemoveContactMutation();
    // console.log("result DELETE => ", result)

    // const [updateContact, updateContactResult] = useUpdateContactMutation(); 

    useEffect(() => {
        removeContactResult.isError && toast.error("error on remove Contact")
    }, [removeContactResult.isError]); 

    useEffect(() => {
        removeContactResult.isSuccess && toast.success("Contact successfully removed")
    }, [removeContactResult.isSuccess]);



    const toggleUpdateForm = () => {
        setIsShowUpdate(!isShowUpdate)
    }

    // const onUpdateContact = (id) => {

    // }

    // const handleInputChange = (event) => {
    //     const { name, value } = event.currentTarget
    //     // console.log('event.currentTarget.name =>', event.currentTarget.name )
    //     switch (name) {
            
    //         case 'email':
    //             setEmail(value);
    //             break;
            
    //         case 'password':
    //             setPassword(value);
    //             break;
            
    //         default:
    //             return;
    //     }
    // }

    // function handleInputSubmit  (event) {
    //     event.preventDefault();
    //     const user = { email, password }
    //     dispatch(userAuthOperations.userLogin(user))
    //     reset();
    //     navigate('/contacts');
    // }

    // const reset = () => {
    //     setEmail('');
    //     setPassword('');
    // }




    return (
        <>
            <li key={id} className={css.contactListItem}>
                                <p>Name: {name}</p>
                                <p>Number: {number}</p>
                <button className={css.contactUpdateBtn}
                    onClick={toggleUpdateForm}
                    type="button">
                    Update</button>
                <button className={css.contactRemoveBtn}
                    onClick={() => removeContact(id)}
                    type="button"
                    disabled={removeContactResult.isLoading}> Remove </button>
            </li>
            {isShowUpdate && <Modal onClose={toggleUpdateForm}><UpdateForm id={id} currentName={name} currentNumber={ number} onClose={ toggleUpdateForm} /></Modal>}
            
        </>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}