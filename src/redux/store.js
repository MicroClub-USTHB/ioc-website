import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from './workspaceSlice';

export default configureStore({
    reducer: {
        workspace: workspaceReducer,
    }
})