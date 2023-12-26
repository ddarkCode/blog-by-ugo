import { Schema, model } from 'mongoose';

const commentSchemma = new Schema({
  message: String,
  authorId: String,
  author: String,
  createdAt: Date,
  time: String,
});

export default model('Comment', commentSchemma);
