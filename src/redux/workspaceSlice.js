import { createSlice } from "@reduxjs/toolkit";

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        chosenDay: 1,
    },
    reducers: {
        chooseDay: (state, action) => { state.chosenDay = action.payload },
    }
})

export const { chooseDay } = workspaceSlice.actions;

export default workspaceSlice.reducer;