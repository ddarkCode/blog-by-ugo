import React from 'react';
import { capitalize } from 'lodash';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/formatDate';

function Blog({ _id, createdAt, title, username, description, para1 }) {
  const { date, time } = formatDate(createdAt);
  return (
    <div key={_id} className="blog-list">
      <h3>{title}</h3>
      <div className="blog-list-info">
        <h5>{capitalize(description)}</h5>
        <p style={{ marginTop: 0 }}>By {capitalize(username)}</p>
        <p style={{ marginTop: 0 }}>{date}</p>
        <p style={{ marginTop: 0 }}>{time}</p>
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

export default Blog;
