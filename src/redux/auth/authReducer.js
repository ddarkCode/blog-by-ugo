import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '..';

const initialState = {
  user: null,
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkApi) => {
    const { data } = await axios.post(`${baseUrl}/auth/signup`, user);
    return data;
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (user, thunkApi) => {
    const { data } = await axios.post(`${baseUrl}/auth/signin`, user);
    return data;
  }
);

export const signout = createAsyncThunk(
  'auth/signout',
  async (user, thunkApi) => {
    await axios.get(`${baseUrl}/auth/signout`);
  }
);

export const update = createAsyncThunk(
  'auth/update',
  async (user, thunkApi) => {
    const { data } = await axios.patch(`${baseUrl}/auth/${user.userId}`, user);
    return data;
  }
);

export const getProfile = createAsyncThunk(
  'auth/profile',
  async (user, thunkApi) => {
    const { data } = await axios.get(`${baseUrl}/auth/profile`);

    return data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthOnPageLoad(state, action) {
      state.user = JSON.parse(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      localStorage.setItem('auth', JSON.stringify(action.payload));

      state.user = action.payload;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      localStorage.setItem('auth', JSON.stringify(action.payload));

      state.user = action.payload;
    });
    builder.addCase(update.fulfilled, (state, action) => {
      localStorage.setItem('auth', JSON.stringify(action.payload));
      state.user = action.payload;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      localStorage.setItem('auth', JSON.stringify(action.payload));
      state.user = action.payload;
    });
    builder.addCase(signout.fulfilled, (state, action) => {
      localStorage.setItem('auth', null);
      state.user = null;
    });
  },
});

const { actions, reducer } = authSlice;

const { updateAuthOnPageLoad } = actions;

export { updateAuthOnPageLoad };

export default reducer;
