import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X } from 'react-bootstrap-icons';

import { formatDate } from '../../utils/formatDate';
import { deleteComment } from '../redux/blogs/blogsSlice';

function Comment({ message, createdAt, author, _id, authorId, blogId }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  let status = user && user._id === authorId;
  const { date, time } = formatDate(createdAt);
  return (
    <div className="comment">
      <div>
        <span>{author}</span>
        {':'}
        <span>{date}</span> {'  '}
        <span>{time}</span>
      </div>
      <p>{message}</p>
      <button style={{ display: status ? 'block' : 'none' }}>
        <X
          onClick={() => dispatch(deleteComment({ blogId, commentId: _id }))}
        />
      </button>
    </div>
  );
}

export default Comment;
