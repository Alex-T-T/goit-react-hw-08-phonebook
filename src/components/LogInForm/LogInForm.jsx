import css from "../LogInForm/LogInForm.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import userAuthOperations from "redux/userAuth/userAuth-operations";
// import { toast } from "react-toastify";
// import { useLoginUserMutation } from "redux/userSlice";


export const LogInForm = () => {
    const dispatch = useDispatch();
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
    }

    const reset = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <form className={css.form}>

            <label> Email
                <input type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                        required 
                    />
            </label>

            <label> Password
                <input type="password" name="password" value={password}
                    onChange={handleInputChange}
                    required/>
            </label>

            <button type="submit" onClick={handleInputSubmit}>LogIn</button>

            </form>
            {/* {result.isSuccess && <><div>{result.data.user.email }</div> <div>token{token}</div></>} */}
        </>
    )
}