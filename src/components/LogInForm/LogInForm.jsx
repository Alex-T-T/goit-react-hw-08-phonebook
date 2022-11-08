import css from "../LogInForm/LogInForm.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import userAuthOperations from "redux/userAuth/userAuth-operations";
import { useNavigate } from "react-router-dom";
import downloading from '../../img/downloading.jpeg';

// import { toast } from "react-toastify";
// import { useLoginUserMutation } from "redux/userSlice";


export const LogInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [token, setToken] = useState('');

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
        const user = { email, password }
        dispatch(userAuthOperations.userLogin(user))
        reset();
        navigate('/contacts');
    }

    const reset = () => {
        setEmail('');
        setPassword('');
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

            </form>
             <img className={css.loginImg} src={downloading} alt='yellow pages'/>
            {/* {result.isSuccess && <><div>{result.data.user.email }</div> <div>token{token}</div></>} */}
        </div>
    )
}