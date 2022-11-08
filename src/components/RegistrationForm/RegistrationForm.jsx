import { useState } from "react";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import userAuthOperations from '../../redux/userAuth/userAuth-operations';
import {useNavigate} from 'react-router-dom'

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget
        
        console.log('event.currentTarget.name =>', event.currentTarget.name )
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword(value);
                break;
            
            default:
                return;
        }
    }

    function handleInputSubmit  (event) {
        event.preventDefault();
        console.log({ name, email, password });
        dispatch(userAuthOperations.userRegistration({ name, email, password }));
        reset();
        navigate('/contacts');
    }

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }


    return (<>
        <form className={css.form}>
            <label> Name
                <input type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleInputChange}
                        required 
                        />
            </label>

            <label> Email
                <input type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={email}
                    onChange={handleInputChange}
                    required
                    />
            </label>

            <label> Password
                <input type="password"
                    name="password"
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
                    value={password}
                    onChange={handleInputChange}
                    required
                    />
            </label>

            <button type="submit" onClick={handleInputSubmit}>Register</button>

        </form>
        {/* {result.data.user.name && <p>${ result.data.user.name}</p>} */}
        </>
    )
}