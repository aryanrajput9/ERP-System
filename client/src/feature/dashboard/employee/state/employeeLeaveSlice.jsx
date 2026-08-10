import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    leaves: [],
    loading: true,
    error: null,
};


const LeaveSlice = createSlice({
    name: "leave",
    initialState,
    reducers: {
        setLeave: (state, action) => {

            state.leaves = action.payload
            state.loading = false
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

    }

});


export const { setError, setLeave, setLoading } = LeaveSlice.actions;

export default LeaveSlice.reducer