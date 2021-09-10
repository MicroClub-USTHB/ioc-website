import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/backend";
import common from "./slices/common";
import user from "./slices/user";
import notifications from "./slices/notifications";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        common,
        user,
        notifications,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware),
});

export default store;
