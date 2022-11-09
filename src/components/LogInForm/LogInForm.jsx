import css from "../LogInForm/LogInForm.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import userAuthOperations from "redux/userAuth/userAuth-operations";
import downloading from '../../img/downloading.jpeg';
import {RiLoginBoxLine} from 'react-icons/ri'

export const LogInForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleInputChange = (event) => {
        const { name, value } = event.currentTarget
        // console.log('event.currentTarget.name =>', event.currentTarget.name )
        switch (name) {
            
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
        dispatch(userAuthOperations.userLogin({ email, password }))
    }

    return (
        <div className={css.loginContainer}>
            <form className={css.loginForm}>

            <label className={css.loginLabel}> Email
                <input type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        
                    />
            </label>

            <label className={css.loginLabel}> Password
                    <input type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            required/>
            </label>
                    <button className={css.loginBtn}
                        type="submit"
                        onClick={handleInputSubmit}>
                        Login
                    </button>
                <p className={css.text}>Are you not registered yet?</p>
                <a className={css.link} href="/goit-react-hw-08-phonebook/register"><p className={css.text}>Clic here <RiLoginBoxLine className={css.inbox}/></p></a>
            </form>
             <img className={css.loginImg} src={downloading} alt='yellow pages'/>
        </div>
    )
}