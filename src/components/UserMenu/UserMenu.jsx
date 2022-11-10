import { useDispatch, useSelector } from "react-redux";
import userAuthSelectors from "redux/userAuth/userAuth-selectors";
import css from "../UserMenu/UserMenu.module.css";
import userAuthOperations from "redux/userAuth/userAuth-operations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(userAuthSelectors.getUserEmail);

    const logout = () => {
        dispatch(userAuthOperations.userLogout());
    }

    return (
        <div>
            <p>Wellcome</p>
            <p>{email}</p>
            
            <button className={css.logOutBtn} onClick = { logout}>Logout</button>
        </div>
    )
}