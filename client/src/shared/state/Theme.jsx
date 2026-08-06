import { createSlice } from '@reduxjs/toolkit'
import stoarage from '../hooks/locastorageHook';



const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: stoarage.get("theme") || "light"
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})


export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer