import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import { createStore } from './redux';

const INITIAL_STATE = window.INITIAL_STATE;
const store = createStore(INITIAL_STATE);

const root = hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>
);
