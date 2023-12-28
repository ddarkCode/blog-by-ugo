import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getProfile } from './redux/auth/authReducer';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App({ route }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ublog</title>
        <link rel="canonical" href="https://ublog-fw5w.onrender.com/" />
      </Helmet>
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
}

export default App;
