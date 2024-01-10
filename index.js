import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import React from 'react';
import logger from 'morgan';
import debug from 'debug';
import { connect } from 'mongoose';
import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session';
import cors from 'cors';
import { matchRoutes } from 'react-router-config';
import { rateLimit } from 'express-rate-limit';

import errorHandler from './middlewares/errorHandler';
import passportConfig from './passport';
import blogRoutes from './routes/blogRoutes';
import authRoutes from './routes/authRoutes';
import renderer from './helpers/renderer';
import { createStore } from './helpers/configureStore';
import Routes from './src/Routes';

const log = debug('index');
const MongoDBStoreSession = MongoDBStore(session);
const { MONGO_LOCAL, MONGO_CLOUD, SESSION_SECRET, FRONTEND_URL } = process.env;

const PORT = process.env.PORT || 9000;

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  validate: { trustProxy: false },
});
const mongoSessionStore = new MongoDBStoreSession({
  uri: process.env.MONGO_CLOUD,
  collection: 'ublogDbSessions',
});

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoSessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 4 * 12,
    },
  })
);

passportConfig(app);

// Middleware

app.set('trust proxy', true);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(limiter);

app.use('/api', authRoutes());
app.use('/api/blogs', blogRoutes());

app.get('*', (req, res) => {
  const blogId = req.originalUrl.split('/')[2];

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
