import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { capitalize } from 'lodash';
import { X } from 'react-bootstrap-icons';

import {
  getblog,
  deleteblog,
  likeBlog,
  unlikeBlog,
  addComment,
  deleteComment,
} from '../redux/blogs/blogsSlice';
import { formatDate } from '../../utils/formatDate';

import '../components/css/BlogPage.css';
import CommentList from '../components/CommentList';

function Blog() {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const blog = useSelector((state) => state.blogs.blog);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getblog(blogId));
  }, []);
  const {
    _id,
    title,
    description,
    username,
    createdAt,
    para1,
    para2,
    para3,
    comments,
    likes,
    authorId,
  } = blog;
  let status = user && likes && likes.includes(user._id);
  let blogStatus = user && user._id === authorId;

  function likePost() {
    dispatch(likeBlog(_id));
  }
  function deleteLike() {
    dispatch(unlikeBlog(_id));
  }
  const handleDeleteBlog = () => {
    dispatch(deleteblog(blogId));
    history.push('/blogs');
  };

  return (
    <div className="blogs-page blog-main-page">
      {Object.keys(blog).length === 0 ? (
        <h2 style={{ textAlign: 'center', height: '80vh', marginTop: '200px' }}>
          Loading
        </h2>
      ) : (
        <>
          <h1>{title}</h1>
          <div className="author-detail">
            <h3>{capitalize(description)} </h3>
            <p> {capitalize(username)} </p>
            <p>{formatDate(createdAt)}</p>
          </div>
          <div className="paragraphs">
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>
          </div>

          <div className="reaction-icons">
            <div>
              <button
                onClick={status ? deleteLike : likePost}
                disabled={user ? false : true}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="2em"
                  height="2em"
                  fill={'#C70039'}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  ></path>
                </svg>
              </button>
              <span>{likes.length}</span>
            </div>
            <button style={{ display: blogStatus ? 'block' : 'none' }}>
              <X onClick={handleDeleteBlog} />
            </button>
          </div>

          <CommentList comments={comments} blogId={_id} />

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <Link to="/blogs" style={{ borderBottom: '1px solid #04364a' }}>
              Back To blogs
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default {
  component: Blog,
  loadData: (store, blogId) => store.dispatch(getblog(blogId)),
};
