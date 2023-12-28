import React from 'react';

import helmet from '../components/Helmet';

import '../components/css/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      {helmet('ublog', 'Contact Page')}
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
