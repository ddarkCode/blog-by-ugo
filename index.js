import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import React from 'react';
import logger from 'morgan';
import debug from 'debug';
import { connect } from 'mongoose';
import session from 'express-session';
import MongoDBStoreSession from 'connect-mongodb-session';
import cors from 'cors';
import { matchRoutes } from 'react-router-config';

import errorHandler from './middlewares/errorHandler';
import passportConfig from './passport';
import blogRoutes from './routes/blogRoutes';
import authRoutes from './routes/authRoutes';
import renderer from './helpers/renderer';
import { createStore } from './helpers/configureStore';
import Routes from './src/Routes';

const log = debug('index');
const MongoStore = MongoDBStoreSession(session);

const { MONGO_LOCAL, MONGO_CLOUD, SESSION_SECRET, FRONTEND_URL } = process.env;

const PORT = process.env.PORT || 9000;

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(
  session({
    // store: new MongoStore({
    //   url: MONGO_CLOUD,
    // }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

passportConfig(app);

// Middleware

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use('/api', authRoutes());
app.use('/api/blogs', blogRoutes());

app.get('*', (req, res) => {
  const blogId = req.originalUrl.split('/')[2];

  // let userId;
  // if (req.user) {
  //   userId = req.user._id;
  // }

  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
    return route.loadData
      ? route.loadData(store, blogId)
      : Promise.resolve(null);
  });

  Promise.all(promises).then(() => {
    const context = {};
    const html = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    return res.send(html);
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  log(`Server is running on ${PORT}`);

  (async function connectDatabase() {
    try {
      await connect(MONGO_CLOUD);
      log('Database Connected Successfully.');
    } catch (err) {
      log(
        `An Error Occurred While Connecting To Database ${JSON.stringify(err)}`
      );
    }
  })();
});
