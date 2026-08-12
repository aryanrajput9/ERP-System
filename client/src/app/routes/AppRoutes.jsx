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
import AttendencePage from "../../feature/dashboard/admin/ui/pages/AdminAttendencePage";
import AdminLeavePage from "../../feature/dashboard/admin/ui/pages/AdminLeavePage";
import AdminAttendencePage from "../../feature/dashboard/admin/ui/pages/AdminAttendencePage";
import ChatPage from "../../feature/dashboard/admin/ui/pages/ChatPage";

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
]);

export default router;