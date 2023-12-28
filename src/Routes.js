import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Compose from './pages/Compose';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/signup',
        component: Signup,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/compose',
        component: Compose,
      },
      {
        path: '/blogs',
        exact: true,
        ...Blogs,
      },
      {
        path: '/blogs/:blogId',
        ...Blog,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/contact',
        component: Contact,
      },
      {
        component: NotFoundPage,
      },
    ],
  },
];
