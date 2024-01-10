import React from 'react';

import Blog from './Blog';

import './css/BlogList.css';

function BlogList({ blogs }) {
  return (
    <>
      {blogs.map((blog) => {
        return <Blog key={blog._id} {...blog} />;
      })}
    </>
  );
}

export default BlogList;
