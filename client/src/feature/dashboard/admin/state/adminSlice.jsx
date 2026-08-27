import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    allEmploye: null,
    allEmployeeAttendance: [],
    alltask: [],
    allLeave: [],
    allEmployeLoading: true,
    allEmployeeAttendanceLoading: true,
    allTaskLoading: true,
    allLeaveLoading: true,
    allAttendanceHistory: [],
    error: null
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAllEmploye: (state, action) => {
            state.allEmploye = action.payload;
            state.allEmployeLoading = false
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setAllEmployeeAttendance: (state, action) => {
            state.allEmployeeAttendance = action.payload,
                state.allEmployeeAttendanceLoading = false
        },
        setAllTask: (state, action) => {
            state.alltask = action.payload;
            state.allTaskLoading = false
        },
        setAllLeave: (state, action) => {
            state.allLeave = action.payload;
            state.allLeaveLoading = false
        },
        setAllAttendanceHistory: (state, action) => {
            state.allAttendanceHistory = action.payload
        }
    }

})


export const { setAllEmploye, setError, setAllEmployeeAttendance, setAllTask, setAllLeave, setAllAttendanceHistory } = adminSlice.actions;

export default adminSlice.reducer