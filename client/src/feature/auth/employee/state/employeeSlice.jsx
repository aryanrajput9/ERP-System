import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    employee: null,
    accessToken: null,
    isLoading: true,
    isAuthenticated: false,
    error: null,
}

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        setEmployeeData: (state, action) => {
            state.employee = action.payload;
            state.isLoading = false,
                state.isAuthenticated = true
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        removeEmployeeData: (state) => {
            state.employee = null;
            state.accessToken = null;
            state.isLoading = false
        },

        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }

});



export const { setAccessToken, setEmployeeData, removeEmployeeData, isLoading, setError, setLoading } = employeeSlice.actions;

export default employeeSlice.reducer