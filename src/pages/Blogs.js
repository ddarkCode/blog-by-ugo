import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getblogs } from '../redux/blogs/blogsSlice';
import BlogList from '../components/BlogList';
import helmet from '../components/Helmet';

import '../components/css/BlogsPage.css';

function Blogs() {
  const blogs = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(getblogs());
    }
  }, []);

  return (
    <div className="blogs-page">
      {helmet('ublog', 'Blogs Page')}
      <h1>Explore Stories And Thinking On A Variety Of Topics</h1>
      {blogs.length === 0 ? (
        <h2 style={{ textAlign: 'center', height: '80vh', marginTop: '200px' }}>
          Loading
        </h2>
      ) : (
        blogs.map(function (blog) {
          return <BlogList key={blog._id} {...blog} />;
        })
      )}
    </div>
  );
}

export default {
  component: Blogs,
  loadData: (store) => store.dispatch(getblogs()),
};
