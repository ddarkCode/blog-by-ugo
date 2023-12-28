import React from 'react';
import { Helmet } from 'react-helmet';

import '../components/css/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us Page</title>
        <meta name="description" content={`Let's Hear Your Ideas`} />
      </Helmet>
      <h1>We'd Love To Here From You.</h1>
      <div className="contact-container">
        <p className="contact-content">
          {' '}
          Whether You Are Curious About Features Or Even Press - We're Ready To
          Answer Any And All Questions{' '}
        </p>
        <div className="image-container">
          <img
            src="/images/lightbulb2.jpg"
            className="contact-img"
            alt="light bulb"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
