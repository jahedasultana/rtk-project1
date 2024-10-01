import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/products/productsSlice'
import { productsApi } from '../services/productsApi'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    productsR: productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,


  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// for refetch data
setupListeners(store.dispatch)