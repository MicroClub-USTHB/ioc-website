import { createSlice, ThunkDispatch } from "@reduxjs/toolkit";

export interface NotificationsI {
    title: string;
    description: string;
    type: "error" | "success" | "warning";
}
export interface NotificationsS extends NotificationsI {
    shown: boolean;
}
const initial_state: NotificationsS = {
    title: "Error",
    description: "Undefined",
    type: "error",
    shown: true,
};
const notifications = createSlice({
    name: "notifications",
    initialState: initial_state,
    reducers: {
        setNotification: (state, { payload }: { payload: NotificationsI }) => {
            state.title = payload.title;
            state.description = payload.description;
            state.type = payload.type;
            state.shown = true;
        },
        setShow: (state, { payload }: { payload: boolean }) => {
            state.shown = payload;
        },
    },
});

export const { setNotification, setShow } = notifications.actions;
export const Notify = (dispatch: any, { title, description, type }: NotificationsI) => {
    dispatch(
        setNotification({
            title,
            description,
            type,
        })
    );
    setTimeout(() => {
        dispatch(setShow(false));
    }, 10000);
};
export default notifications.reducer;
