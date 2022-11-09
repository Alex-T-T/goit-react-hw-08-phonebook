import css from "../UpdateForm/UpdateForm.module.css"
import { useState, useEffect } from "react";
import { useUpdateContactMutation, useGetContactsQuery} from "../../redux/contactsSlice";
// import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import { auditName } from 'utils/auditName';
import { auditNumber } from 'utils/auditNumber';


export const UpdateForm = ({id, onClose}) => {
    // const dispatch = useDispatch();
    const [updateContact, updateContactResult] = useUpdateContactMutation(); 
    const { data } = useGetContactsQuery();

    // const navigate = useNavigate();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const btnText =  updateContactResult.isLoading ? <ThreeDots  color="white" height="15" width="60"/> : 'Update' 

    useEffect(() => {
        updateContactResult.isSuccess && toast.success("Contact successfully updated")
    }, [updateContactResult.isSuccess]);
    
    useEffect(() => {
        updateContactResult.isError && toast.error("error on update Contact")
    }, [updateContactResult.isError]); 



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

        if (auditName(data, name)) {
            toast.error (`${name} is already in contacts.`);
            return 
        };

        if (auditNumber(data, number)) {
            toast.error (`${number} is already in contacts.`);
            return 
        };
        updateContact({id, name, number});
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
                        value={name}
                        onChange={handleInputChange}
                        required 
                    />
            </label>

            <label> Number
                    <input type="number"
                            name="number"
                            value={number}
                            onChange={handleInputChange}
                            required/>
            </label>
                    <button className={css.updateBtn}
                        type="submit"
                        onClick={handleInputSubmit} disabled={updateContactResult.isLoading}>
                        {btnText}
                    </button>

            </form>
        </>
    )
}