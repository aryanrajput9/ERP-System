
import { createBrowserRouter } from 'react-router';
import LandingPages from '../../shared/ui/pages/landingPages';
import Login from '../../feature/auth/employee/ui/pages/LoingPage';
import Home from '../../feature/dashboard/employee/ui/pages/home';
import EmployeeLayout from '../layout/EmployeeLayout';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../../feature/dashboard/employee/ui/pages/Dashboard';
import AttendancePage from '../../feature/dashboard/employee/ui/pages/AttendencePage';
import LeavePage from '../../feature/dashboard/employee/ui/pages/LeavePage';
import SalaryPage from '../../feature/dashboard/employee/ui/pages/SalaryPage';
import ProfilePage from '../../feature/dashboard/employee/ui/pages/ProfilePage';

const AppRoutes = createBrowserRouter([

    {
        element: <EmployeeLayout />,
        children: [

            {
                element: <PublicRoute />,
                children: [
                    {
                        path: "/",
                        element: <LandingPages />
                    },
                    {
                        path: "/login",
                        element: <Login />
                    },
                ]
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "",
                        element: <Home />,
                        children: [
                            {
                                path: "home",
                                element: <Dashboard />
                            },
                            {
                                path: "attendance",
                                element: <AttendancePage />
                            },
                            {
                                path: "leaves",
                                element: <LeavePage />
                            },
                            {
                                path: "salary",
                                element: <SalaryPage />
                            },
                            {
                                path: "profile",
                                element: <ProfilePage />
                            }
                        ]
                    },

                ]
            }

        ]
    }
])

export default AppRoutes
