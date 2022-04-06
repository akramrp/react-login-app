import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        color: "",
    },

    reducers: {
        changeThemeColor: (state, action) => {
            state.color = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeThemeColor } = themeSlice.actions

export default themeSlice.reducer