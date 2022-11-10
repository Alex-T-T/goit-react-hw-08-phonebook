import css from "../UpdateForm/UpdateForm.module.css"
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

// import { useUpdateContactMutation} from "../../redux/contactsSlice";
// import { toast } from 'react-toastify';
// import { ThreeDots } from 'react-loader-spinner';

export const UpdateForm = ({id, currentName, currentNumber, onClose, onUpdate}) => {

    // const [updateContact, updateContactResult] = useUpdateContactMutation(); 

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    // const btnText =  updateContactResult.isLoading ? <ThreeDots  color="white" height="15" width="60"/> : 'Update' 

    useEffect(() => {
        name === '' && setName(currentName)

    }, [currentName, name]);

    useEffect(() => {
        number === '' && setNumber(currentNumber)
    }, [currentNumber, number]);


    // useEffect(() => {
    //     updateContactResult.isSuccess && toast.success("Contact successfully updated")
    // }, [updateContactResult.isSuccess]);
    
    // useEffect(() => {
    //     updateContactResult.isError && toast.error("error on update Contact")
    // }, [updateContactResult.isError]); 

const handleInputChange = (event) => {
        const { name, value } = event.currentTarget
        // console.log('event.currentTarget.name =>', event.currentTarget.name )
        switch (name) {
            
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    function handleInputSubmit  (event) {
        event.preventDefault();

        onUpdate({id, name, number});
        reset();
        onClose();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <>
            <form className={css.form}>

            <label> Name
                <input type="text"
                        name="name"
                        // value={name}
                        defaultValue={currentName}
                        onChange={handleInputChange}
                        required 
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

                    />
            </label>

            <label> Number
                    <input type="number"
                            name="number"
                        // value={number}
                        defaultValue = {currentNumber}
                            onChange={handleInputChange}
                        required
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        
                            />
            </label>
                    <button className={css.updateBtn}
                        type="submit"
                        // onClick={handleInputSubmit} disabled={updateContactResult.isLoading}>
                        onClick={handleInputSubmit}>
                        Update
                    </button>

            </form>
        </>
    )
}

UpdateForm.propTypes = {
    id: PropTypes.string.isRequired,
    currentName: PropTypes.string.isRequired,
    currentNumber: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
}