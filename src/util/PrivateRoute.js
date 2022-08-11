import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {
    let auth;
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    );
}

export default PrivateRoute;