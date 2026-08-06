import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from '../shared/state/Theme'
import employeeSlice from '../feature/auth/employee/state/employeeSlice'



export const store = new configureStore(
    {
        reducer: {
            theme: ThemeSlice,
            employee: employeeSlice
        }
    }
)