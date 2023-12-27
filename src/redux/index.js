import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authReducer';
import blogsReducer from './blogs/blogsSlice';

export const baseUrl = 'https://ublog-fw5w.onrender.com/api';

export const createStore = (preloadedState) =>
  configureStore({
    reducer: {
      auth: authReducer,
      blogs: blogsReducer,
    },
    preloadedState,
  });
