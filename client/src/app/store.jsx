import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from '../shared/state/Theme'
import employeeSlice from '../feature/auth/employee/state/employeeSlice'
import employeeAttendanceSlice from '../feature/dashboard/employee/state/employeAttendenceSlice';
import LeaveSlice from '../feature/dashboard/employee/state/employeeLeaveSlice'
import adminSlice from '../feature/dashboard/admin/state/adminSlice'


export const store = new configureStore(
    {
        reducer: {
            theme: ThemeSlice,
            employee: employeeSlice,
            attendance: employeeAttendanceSlice,
            leave: LeaveSlice,
            admin: adminSlice
        }
    }
)