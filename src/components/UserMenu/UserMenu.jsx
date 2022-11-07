import { useDispatch, useSelector } from "react-redux";
import userAuthSelectors from "redux/userAuth/userAuth-selectors";
import css from "../UserMenu/UserMenu.module.css";
import userAuthOperations from "redux/userAuth/userAuth-operations";
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector(userAuthSelectors.getUserEmail);

    const logout = () => {
        dispatch(userAuthOperations.userLogout());
        navigate("/login");
    }

    return (
        <div>
            <p>{ email}</p>
            <button className={css.logOutBtn} onClick = { logout}>Logout</button>
        </div>
    )
}