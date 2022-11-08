import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import userAuthSelectors  from '../redux/userAuth/userAuth-selectors';

export default function PrivateRoute() {
    const isLoggedIn = useSelector(userAuthSelectors.getIsLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to='login'/>
    }

    return <Outlet/> 
}