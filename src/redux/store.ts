import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/backend';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware),
});

export default store;