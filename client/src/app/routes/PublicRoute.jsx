
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import Spinner from '../../shared/ui/components/Spinner';

function PublicRoute() {


    const { isAuthenticated, isLoading } = useSelector((state) => state.employee);
    const { employee } = useSelector((state) => state.employee)


    if (isLoading) {
        return <Spinner />
    }

    if (isAuthenticated && employee?.role === "Employee") {
        return <Navigate to="/dashboard/home" replace></Navigate>
    }
    if (isAuthenticated && employee?.role === "Manager") {
        return <Navigate to="/admin" replace></Navigate>
    }
    return <Outlet />

}

export default PublicRoute
