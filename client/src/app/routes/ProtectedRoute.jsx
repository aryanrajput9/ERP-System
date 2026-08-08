
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute() {

    const { isAuthenticated, isLoading } = useSelector((state) => state.employee);



    if (!isAuthenticated) {
        return <Navigate to="/"></Navigate>
    }


    return <Outlet />


}

export default ProtectedRoute
