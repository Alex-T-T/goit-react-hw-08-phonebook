import css from "../UpdateForm/UpdateForm.module.css"
import { useState, useEffect } from "react";
import { useUpdateContactMutation} from "../../redux/contactsSlice";
// import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner'


export const UpdateForm = ({id, onClose}) => {
    // const dispatch = useDispatch();
    const [updateContact, updateContactResult] = useUpdateContactMutation(); 
    // const { data } = useGetContactsQuery();

    // const navigate = useNavigate();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const btnText =  updateContactResult.isLoading ? <ThreeDots  color="white" height="15" width="60"/> : 'Update' 


    useEffect(() => {
        updateContactResult.isError && toast.error("error on update Contact")
    }, [updateContactResult.isError]); 

    useEffect(() => {
        // console.log(updateContactResult)
        updateContactResult.isSuccess && toast.success("Contact successfully updated")
    }, [ updateContactResult.isSuccess]);

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