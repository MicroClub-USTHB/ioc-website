import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/backend';
import common from './slices/common';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    common,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware),
});

export default store;