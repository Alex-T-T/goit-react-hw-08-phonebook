import css from '../ContactItem/ContactItem.module.css';
import React from 'react';
import PropTypes from 'prop-types'
import { useRemoveContactMutation, useUpdateContactMutation } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

export const ContactItem = ({ id, name, number }) => {
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [removeContact, removeContactResult] = useRemoveContactMutation();
    const [updateContact, updateContactResult] = useUpdateContactMutation(); 

    // const [_, updateContactResult] = useUpdateContactMutation(); 

    // useEffect(() => {
    //     updateContactResult.isSuccess && toast.success("Contact successfully updated")
    // }, [updateContactResult.isSuccess]);
    
    // useEffect(() => {
    //     updateContactResult.isError && toast.error("error on update Contact")
    // }, [updateContactResult.isError]); 

    useEffect(() => {
        removeContactResult.isError && toast.error("error on remove Contact")
    }, [removeContactResult.isError]); 

    useEffect(() => {
        removeContactResult.isSuccess && toast.success("Contact successfully removed")
    }, [removeContactResult.isSuccess]);


    useEffect(() => {
        updateContactResult.isSuccess && toast.success("Contact successfully updated")
    }, [updateContactResult.isSuccess]);
    
    useEffect(() => {
        updateContactResult.isError && toast.error("error on update Contact")
    }, [updateContactResult.isError]); 

    const toggleUpdateForm = () => {
        setIsShowUpdate(!isShowUpdate)
    }

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
            {isShowUpdate && <Modal onClose={toggleUpdateForm}><UpdateForm id={id} currentName={name} currentNumber={number} onClose={toggleUpdateForm} onUpdate={ updateContact} /></Modal>}
            
        </>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}