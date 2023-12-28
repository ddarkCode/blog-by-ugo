import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../components/css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content={`Discover Stories And Thinking On A Variety Of Topics.`}
        />
      </Helmet>
      <h1>Curious? Discover Stories And Thinking On A Variety Of Topics.</h1>
      <h3>Welcome to Ublog: Your Voice, Amplified</h3>
      <p>
        Do you have stories to tell, opinions to share, or knowledge to
        dispense? Ublog is your open stage, a vibrant community where passionate
        voices like yours can take center stage. Whether you're a seasoned
        wordsmith or a budding writer, a seasoned photographer or a meme
        aficionado, Ublog offers a platform to connect, engage, and inspire.
      </p>
      <p>
        Forget the echo chambers of social media where algorithms dictate what
        you see. Here, authenticity reigns supreme. You curate your own
        experience, discovering diverse perspectives and voices that spark
        curiosity and challenge your viewpoints. Dive into personal narratives,
        insightful thought pieces, and captivating creative expressions – a
        vibrant tapestry woven from the threads of your fellow Ubloggers.
      </p>
      <p>
        So, step into the spotlight and let your voice ring out. Share your
        passions, ignite discussions, and leave your mark on the world. Ublog is
        more than just a blog; it's a community of open minds, eager hearts, and
        boundless creativity. Welcome to your platform, your voice, your Ublog.
      </p>
      <Link to="/blogs" className="explore">
        Explore
      </Link>
    </div>
  );
};

export default HomePage;
