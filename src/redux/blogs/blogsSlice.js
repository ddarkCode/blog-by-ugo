import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseUrl } from '..';

export const getblogs = createAsyncThunk(
  'blogs/get_all_blogs',
  async (options, thunkApi) => {
    const { data } = await axios.get(`${baseUrl}/blogs`);
    return data;
  }
);

export const getblog = createAsyncThunk(
  'blogs/get_a_blog',
  async (blogId, thunkApi) => {
    const { data } = await axios.get(`${baseUrl}/blogs/${blogId}`);
    return data;
  }
);

export const postAblog = createAsyncThunk(
  'blogs/post_a_blog',
  async (blogObj, thunkApi) => {
    console.log(blogObj);
    const { data } = await axios.post(`${baseUrl}/blogs`, blogObj);
    return data;
  }
);

export const updateblog = createAsyncThunk(
  'blogs/update_a_blog',
  async (updateObj, thunkApi) => {
    const { data } = await axios.patch(
      `${baseUrl}/blogs/${updateObj.blogId}`,
      updateObj.updateData
    );
    return data;
  }
);

export const deleteblog = createAsyncThunk(
  'blogs/delete_a_blog',
  async (blogId, thunkApi) => {
    const { data } = await axios.delete(`${baseUrl}/blogs/${blogId}`);
    return data;
  }
);
export const likeBlog = createAsyncThunk(
  'blogs/like_a_blog',
  async (blogId, thunkApi) => {
    const { data } = await axios.post(`${baseUrl}/blogs/${blogId}/likes`, {});
    return data;
  }
);

export const unlikeBlog = createAsyncThunk(
  'blogs/unlike_a_blog',
  async (blogId, thunkApi) => {
    const { data } = await axios.delete(`${baseUrl}/blogs/${blogId}/likes`, {});
    return data;
  }
);
export const addComment = createAsyncThunk(
  'blogs/add_a_comment',
  async (commentOb, thunkApi) => {
    const { data } = await axios.post(
      `${baseUrl}/blogs/${commentOb.blogId}/comments`,
      commentOb.comment
    );
    return data;
  }
);
export const deleteComment = createAsyncThunk(
  'blogs/delete_a_comment',
  async (commentOb, thunkApi) => {
    const { data } = await axios.delete(
      `${baseUrl}/blogs/${commentOb.blogId}/comments/${commentOb.commentId}`,
      commentOb
    );
    return data;
  }
);

const initialState = {
  blogs: [],
  blog: {},
};

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getblogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });

    builder.addCase(getblog.fulfilled, (state, action) => {
      state.blog = action.payload;
    });

    builder.addCase(postAblog.fulfilled, (state, action) => {
      state.blogs.push(action.payload);
    });

    builder.addCase(updateblog.fulfilled, (state, action) => {
      state.blogs = state.blogs.map((blog) => {
        if (blog._id.toString() === action.payload._id.toString()) {
          return action.payload;
        } else {
          return blog;
        }
      });
    });
    builder.addCase(deleteblog.fulfilled, (state, action) => {
      state.blogs = state.blogs.filter(
        (blog) => blog._id.toString() !== action.payload._id.toString()
      );
    });
    builder.addCase(likeBlog.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
    builder.addCase(unlikeBlog.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
  },
});

const { actions, reducer } = blogsSlice;

export default reducer;
