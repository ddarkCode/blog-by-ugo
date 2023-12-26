import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from 'lodash';
import { formatDate } from '../../utils/formatDate';

import './css/BlogList.css';

function BlogList({ _id, createdAt, title, username, description, para1 }) {
  return (
    <div key={_id} className="blog-list">
      <h3>{title}</h3>
      <div className="blog-list-info">
        <h5>{capitalize(description)}</h5>
        <p style={{ marginTop: 0 }}>By {capitalize(username)}</p>
        <p style={{ marginTop: 0 }}>{formatDate(createdAt)}</p>
      </div>
      <p>{para1}</p>

      <div>
        <Link className="blog-list-link" to={`/blogs/${_id}`}>
          Read More....
        </Link>
      </div>
    </div>
  );
}

export default BlogList;
