import React from 'react';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import Routes from '../src/Routes';

export default function renderer(req, store, context) {
  const stringContent = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  return `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
  
  <head>
    <meta charset="utf-8">
    <title>uBlog</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/styles/styles.css">
   </head>
       
  
  <body>
      <div id="root">${stringContent}</div>

    <footer class="footer">
    
    </footer>

     <script>
       window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>
  
  `;
}

//  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>