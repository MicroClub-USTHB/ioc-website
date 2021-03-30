import { createSlice } from "@reduxjs/toolkit";

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        chosenDay: 1,
        minimized: false,
    },
    reducers: {
        chooseDay: (state, action) => { state.chosenDay = action.payload },
        minimize: state => { state.minimized =  !state.minimized}
    }
})

export const { chooseDay, minimize } = workspaceSlice.actions;

export default workspaceSlice.reducer;