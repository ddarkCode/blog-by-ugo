import passport from 'passport';
import { Router } from 'express';
import debug from 'debug';

import userValidator from '../validators/userValidator';

const log = debug('index:authRoutes');

export default function authRoutes() {
  const authRouter = Router();

  authRouter.route('/auth/signup').post(userValidator, (req, res, next) => {
    passport.authenticate('signup', (err, user, info, status) => {
      if (err) {
        next(err);
      }

      req.login(user, (err) => {
        if (err) {
          next(err);
        }

        const { username, email, createdAt, _id } = user;
        return res.status(201).json({ username, email, createdAt, _id });
      });
    })(req, res, next);
  });

  authRouter
    .route('/auth/signin')

    .post((req, res, next) => {
      passport.authenticate('login', (err, user, info) => {
        if (err) {
          next(err);
        }
        req.login(user, async (err) => {
          if (err) {
            next(err);
          }
          const { email, username, createdAt, _id } = user;
          return res.status(200).json({ email, username, createdAt, _id });
        });
      })(req, res, next);
    });
  authRouter.route('/auth/google').get(
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );
  authRouter.route('/auth/google/authenticate').get((req, res, next) => {
    passport.authenticate('google', (err, user, info) => {
      if (err) {
        next(err);
      }
      req.login(user, async (err) => {
        if (err) {
          next(err);
        }
        const { email, username, createdAt, _id } = user;
        return res.status(302).redirect('/blogs');
      });
    })(req, res, next);
  });

  authRouter.route('/auth/profile').get((req, res, next) => {
    try {
      if (req.isAuthenticated()) {
        const { _id, email, username, createdAt } = req.user;
        return res.status(200).json({ _id, email, username, createdAt });
      } else {
        return res.status(302).send(null);
      }
    } catch (err) {
      next(err);
    }
  });

  authRouter.route('/auth/signout').get((req, res, next) => {
    try {
      req.logout((err) => {
        if (!err) {
          return res.status(302).redirect('/');
        }
      });
    } catch (err) {
      next(err);
    }
  });

  return authRouter;
}
