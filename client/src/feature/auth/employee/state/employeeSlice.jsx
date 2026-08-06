import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    employee: null,
    accessToken: null,
    isLoading: true,
    isAuthenticated: false
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
        }
    }

});



export const { setAccessToken, setEmployeeData, removeEmployeeData } = employeeSlice.actions;

export default employeeSlice.reducer