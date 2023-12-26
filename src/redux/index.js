import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authReducer';
import blogsReducer from './blogs/blogsSlice';

export const baseUrl = 'http://localhost:9000/api';

export const createStore = (preloadedState) =>
  configureStore({
    reducer: {
      auth: authReducer,
      blogs: blogsReducer,
    },
    preloadedState,
  });
