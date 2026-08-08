
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

function PublicRoute() {


    const { isAuthenticated, } = useSelector((state) => state.employee);





    if (isAuthenticated) {
        return <Navigate to="/dashboard/home"></Navigate>
    }
    return <Outlet />

}

export default PublicRoute
