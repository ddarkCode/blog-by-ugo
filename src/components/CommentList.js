import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addComment } from '../redux/blogs/blogsSlice';
import Comment from './Comment';

import './css/Comments.css';

function CommentList({ comments, blogId }) {
  const [commentOb, setCommentOb] = useState({ message: '' });
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setCommentOb((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addComment({ blogId, comment: commentOb }));
    setCommentOb({ message: '' });
  }

  return (
    <div className="comments">
      <h3>Comments</h3>
      {comments.map((co) => {
        return <Comment key={co._id} {...co} blogId={blogId} />;
      })}

      <div>
        <h5>Leave A Comment</h5>
        <form onSubmit={handleSubmit}>
          <input
            name="message"
            value={commentOb.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CommentList;
