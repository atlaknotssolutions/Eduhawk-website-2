import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './pages/Component/productsSlice.js';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // add other reducers here later
  },
  // thunk middleware is included by default in configureStore
});

export default store;