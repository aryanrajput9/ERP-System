import { createBrowserRouter } from "react-router-dom";

import EmployeeLayout from "../layout/EmployeeLayout";
import AdmiLayout from "../layout/AdmiLayout";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import LandingPages from "../../shared/ui/pages/landingPages";
import Login from "../../feature/auth/employee/ui/pages/LoingPage";

import Home from "../../feature/dashboard/employee/ui/pages/home";
import Dashboard from "../../feature/dashboard/employee/ui/pages/Dashboard";
import AttendancePage from "../../feature/dashboard/employee/ui/pages/AttendencePage";
import LeavePage from "../../feature/dashboard/employee/ui/pages/LeavePage";
import SalaryPage from "../../feature/dashboard/employee/ui/pages/SalaryPage";
import ProfilePage from "../../feature/dashboard/employee/ui/pages/ProfilePage";
import HomePage from "../../feature/dashboard/admin/ui/pages/HomePage";
import Team from "../../feature/dashboard/admin/ui/pages/Team";
import Task from "../../feature/dashboard/admin/ui/pages/Task";
import AdminLeavePage from "../../feature/dashboard/admin/ui/pages/AdminLeavePage";
import AdminAttendencePage from "../../feature/dashboard/admin/ui/pages/AdminAttendencePage";
import ChatPage from "../../feature/dashboard/admin/ui/pages/ChatPage";
import ChatsPage from "../../feature/dashboard/employee/ui/pages/ChatsPage";
import HrLayout from "../layout/HrLayout";
import HrHome from "../../feature/dashboard/admin/ui/pages/Hr/HrHome";
import AllEmploye from "../../feature/dashboard/admin/ui/pages/Hr/AllEmploye";
import AddEmployee from "../../feature/dashboard/admin/ui/pages/Hr/AddEmployee"
import EmployeeDirectoryPage from "../../feature/dashboard/admin/ui/pages/Hr/EmployeeDirectoryPage";
import AllAttendance from "../../feature/dashboard/admin/ui/pages/Hr/AllAttendance";
import LeaveMangemenet from "../../feature/dashboard/admin/ui/pages/Hr/LeaveMangemenet";
import Recruitment from "../../feature/dashboard/admin/ui/pages/Hr/Recruitment";
import Departments from "../../feature/dashboard/admin/ui/pages/Hr/Departments";
import Performance from '../../feature/dashboard/admin/ui/pages/Hr/Performance'
import Reports from "../../feature/dashboard/admin/ui/pages/Hr/Reports";
import Announcements from "../../feature/dashboard/admin/ui/pages/Hr/Announcements";


const router = createBrowserRouter([
    {
        element: <PublicRoute />,
        children: [
            { path: "/", element: <LandingPages /> },
            { path: "/login", element: <Login /> },
        ],
    },

    // Employee
    {
        path: "/dashboard",
        element: <ProtectedRoute allowedRole="Employee" />,
        children: [
            {
                element: <EmployeeLayout />,
                children: [
                    {
                        element: <Home />,
                        children: [
                            { index: true, element: <Dashboard /> },
                            { path: "home", element: <Dashboard /> },
                            { path: "attendance", element: <AttendancePage /> },
                            { path: "leaves", element: <LeavePage /> },
                            { path: "salary", element: <SalaryPage /> },
                            { path: "profile", element: <ProfilePage /> },
                            { path: "chat", element: <ChatsPage /> }
                        ],
                    },
                ],
            },
        ],
    },

    // Admin
    {
        path: "/admin",
        element: <ProtectedRoute />,
        children: [
            {
                element: <AdmiLayout />,
                children: [
                    {
                        index: true,
                        path: "",
                        element: <HomePage />,
                    },
                    {
                        path: "team",
                        element: <Team />
                    },
                    {
                        path: "tasks",
                        element: <Task />
                    },
                    {
                        path: "attendence",
                        element: <AdminAttendencePage />
                    },
                    {
                        path: "leave",
                        element: <AdminLeavePage />
                    },
                    {
                        path: "chats",
                        element: <ChatPage />
                    }



                ],
            },
        ],
    },
    //Admin hr
    {
        path: "/hradmin",
        element: <ProtectedRoute />,
        children: [
            {
                element: <HrLayout />,
                children: [
                    {
                        index: true,
                        path: "",
                        element: <HrHome />
                    },
                    {
                        path: "employees",
                        element: <AllEmploye />
                    },
                    {
                        path: "employees/add",
                        element: <AddEmployee />
                    },
                    {
                        path: "employees/directory",
                        element: <EmployeeDirectoryPage />
                    },
                    {
                        path: "attendance",
                        element: <AllAttendance />

                    },
                    {
                        path: "leave",
                        element: <LeaveMangemenet />
                    },
                    {
                        path: "recruitment",
                        element: <Recruitment />
                    },
                    {
                        path: "departments",
                        element: <Departments />
                    },
                    {
                        path: "performance",
                        element: <Performance />
                    },
                    {
                        path: "report",
                        element: <Reports />
                    },
                    {
                        path: "announcements",
                        element: <Announcements />
                    }

                ]
            }
        ]
    }
]);

export default router;