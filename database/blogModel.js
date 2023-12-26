import { Schema, model } from 'mongoose';

const blogSchema = new Schema(
  {
    title: {
      type: String,
      min: 20,
      required: [true, 'Please Provide The Title of Your Post'],
    },
    description: {
      type: String,
      required: [true, 'Please Provide The Description of Your Post'],
    },
    para1: {
      type: String,
      required: [true, 'Please Provide Content For Your Post'],
    },
    para2: {
      type: String,
      required: [true, 'Please Provide Content For Your Post'],
    },
    para3: {
      type: String,
      required: [true, 'Please Provide Content For Your Post'],
    },
    comments: {
      type: Array,
      default: [],
    },
    likes: {
      type: Array,
      default: [],
    },
    authorId: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = model('Blog', blogSchema);

export default Blog;
