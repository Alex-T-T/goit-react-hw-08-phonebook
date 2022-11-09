import { useState } from "react";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import userAuthOperations from '../../redux/userAuth/userAuth-operations';
import wellcome from '../../img/wellcome.jpeg';


export const RegistrationForm = () => {
    const dispatch = useDispatch();
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
    }


    return (<div className={ css.registrationContainer}>
        <form className={css.registrationForm}>
            <label className={css.registrationLabel}> Name
                <input type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleInputChange}
                        required 
                        />
            </label>

            <label className={css.registrationLabel}> Email
                <input type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={email}
                    onChange={handleInputChange}
                    required
                    />
            </label>

            <label className={css.registrationLabel}> Password
                <input type="password"
                    name="password"
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
                    value={password}
                    onChange={handleInputChange}
                    required
                    />
            </label>

            <button className={css.registrationBtn} type="submit" onClick={handleInputSubmit}>Register</button>

        </form>
        
        <img className={css.registrationImg} src={wellcome} alt='yellow pages' />
        
        {/* {result.data.user.name && <p>${ result.data.user.name}</p>} */}
        </div>
    )
}