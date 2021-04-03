import { createSlice } from "@reduxjs/toolkit";

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        chosenDay: 0,
        minimized: false,
        user: true
    },
    reducers: {
        chooseDay: (state, action) => { state.chosenDay = action.payload },
        minimize: state => { state.minimized =  !state.minimized},
        setUser: (state, action) => {state.user = action.payload},
    }
})

export const { chooseDay, minimize, setUser } = workspaceSlice.actions;

export default workspaceSlice.reducer;