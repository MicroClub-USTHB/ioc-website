import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

const initial_state: User | null = JSON.parse(localStorage.getItem("User") || "null");

const user = createSlice({
    name: "user",
    initialState: initial_state,
    reducers: {
        setUser: (state, action: { type: string; payload: User }) => {
            localStorage.setItem("User", JSON.stringify(action.payload));
            state = action.payload ?? null;
            return state;
        },
        removeUser: (state, action: { type: string; payload: any }) => {
            console.error("error", action.payload);
            localStorage.removeItem("User");
            state = null;
            return state;
        },
    },
});

export const { setUser, removeUser } = user.actions;

export default user.reducer;
