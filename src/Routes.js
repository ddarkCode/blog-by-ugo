import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BlogsPage from './pages/BlogsPage';
import BlogPage from './pages/BlogPage';
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
        ...BlogsPage,
      },
      {
        path: '/blogs/:blogId',
        ...BlogPage,
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
