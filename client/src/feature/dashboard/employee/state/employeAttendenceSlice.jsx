import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    todayAttendance: null,
    history: [],
    loading: false,
    error: null,
};

const employeeAttendanceSlice = createSlice({
    name: "attendance",
    initialState,
    reducers: {
        setTodayAttendance: (state, action) => {
            state.todayAttendance = action.payload;
        },

        setAttendanceHistory: (state, action) => {
            state.history = action.payload;
        },

        setAttendanceError: (state, action) => {
            state.error = action.payload;
        },

        setAttendanceLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setTodayAttendance,
    setAttendanceHistory,
} = employeeAttendanceSlice.actions;

export default employeeAttendanceSlice.reducer