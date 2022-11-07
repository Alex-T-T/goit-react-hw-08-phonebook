import css from "../Header/Header.module.css"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useState } from "react"
// import { RegistrationForm } from "components/RegistrationForm/RegistrationForm"
// import { LogInForm } from "components/LogInForm/LogInForm"
// import { Modal } from "components/Modal/Modal"
import { useSelector } from "react-redux"
import userAuthSelectors from "redux/userAuth/userAuth-selectors";
import { NavLink} from 'react-router-dom'

export const Header = () => {
    const isLoggedIn = useSelector(userAuthSelectors.getIsLoggedIn)
    const [isShowRegistration, setIsShowRegistration] = useState(false);
    const [isShowLogIn, setIsShowLogIn] = useState(false);

    const toggleRegistration = () => {
        setIsShowRegistration(!isShowRegistration)
    }

    const toggleLogIn = () => {
        setIsShowLogIn(!isShowLogIn)
    }
    
    return (
        <>
            <header className={css.phonebookHeader}>
                <nav className={css.navigation}>
                    <a className={css.title} href="/goit-react-hw-08-phonebook/">Phonebook</a>
                    
                        {!isLoggedIn
                            ? <div className={css.buttons}>
                            <NavLink to='/register'>
                                <button onClick={toggleRegistration}>Register</button>
                            </NavLink>
                            <NavLink to='/login'>
                                <button onClick={toggleLogIn}>LogIn</button>
                            </NavLink>
                            </div>
                            : <UserMenu/>}
                    
                </nav>
            </header>
            {/* {isShowRegistration && <Modal onClose={toggleRegistration}><RegistrationForm/></Modal>}
            {isShowLogIn && <Modal onClose={toggleLogIn}><LogInForm/></Modal>} */}
        </>
    )
}