import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getblogs } from '../redux/blogs/blogsSlice';
import BlogList from '../components/BlogList';

import '../components/css/BlogsPage.css';

function BlogsPage() {
  const blogs = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(getblogs());
    }
  }, []);

  return (
    <div className="blogs-page">
      <Helmet>
        <title>Blogs Page</title>
        <meta
          name="description"
          content={`${blogs && blogs.length} blogs loaded`}
        />
      </Helmet>
      <h1>Explore Stories And Thinking On A Variety Of Topics</h1>

      {blogs.length === 0 ? (
        <h2 style={{ textAlign: 'center', height: '80vh', marginTop: '200px' }}>
          Loading
        </h2>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
}

export default {
  component: BlogsPage,
  loadData: (store) => store.dispatch(getblogs()),
};
