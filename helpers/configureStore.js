import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../src/redux/auth/authReducer';
import blogsSlice from '../src/redux/blogs/blogsSlice';

export const createStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      blogs: blogsSlice,
    },
  });
};
