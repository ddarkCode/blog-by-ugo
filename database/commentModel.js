import { Schema, model } from 'mongoose';

const commentSchemma = new Schema({
  message: String,
  authorId: String,
  author: String,
  createdAt: Date,
});

export default model('Comment', commentSchemma);
