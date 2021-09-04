import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/backend";
import common from "./slices/common";
import user from "./slices/user";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        common,
        user,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware),
});

export default store;
