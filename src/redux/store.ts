import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/backend';
import UserSlice from './slices/UserSlice';

const store = configureStore({
  reducer: {
    user: UserSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware),
});

export default store;