import React from 'react';
import { Helmet } from 'react-helmet';

function helmet({ title, content }) {
  return (
    <Helmet>
      <title>{`${title} `}</title>
      <meta property="og:title" content={content} />
    </Helmet>
  );
}

export default helmet;
