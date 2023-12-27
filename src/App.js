import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useDispatch } from 'react-redux';

import { updateAuthOnPageLoad, getProfile } from './redux/auth/authReducer';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App({ route }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());

    // const user = localStorage.getItem('auth');

    // if (user) {
    //   dispatch(updateAuthOnPageLoad(user));
    // }
  }, [dispatch]);

  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
}

export default App;