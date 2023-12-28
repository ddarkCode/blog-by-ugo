import React from 'react';

import helmet from '../components/Helmet';

import '../components/css/About.css';

function About() {
  return (
    <div className="about-page">
      {helmet('ublog', 'About Page')}
      <h1>We're Changing The Way People Think About Blogging</h1>
      <p className="about-content">
        {' '}
        <span>uBlog</span>is a blogging technology company founded on the
        premise that basic blogginng services should be helpful, easy and free.
        We want to profit with our members, not from them. That’s why our model
        doesn’t rely on monthly service fees or subscription. We help drive
        innovation, inclusion, and access across the industry.{' '}
      </p>
      <p>
        Do you have stories to tell, opinions to share, or knowledge to
        dispense? <span>Ublog</span> is your open stage, a vibrant community
        where passionate voices like yours can take center stage. Whether you're
        a seasoned wordsmith or a budding writer, a seasoned photographer or a
        meme aficionado, <span>Ublog</span> offers a platform to connect,
        engage, and inspire.
      </p>
    </div>
  );
}

export default About;
