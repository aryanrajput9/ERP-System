
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

function PublicRoute() {


    const { isAuthenticated, isLoading } = useSelector((state) => state.employee);


    if (isLoading) {
        return <h2>loadinng</h2>
    }


    if (isAuthenticated) {
        return <Navigate to="/dashboard/home"></Navigate>
    }
    return <Outlet />

}

export default PublicRoute
