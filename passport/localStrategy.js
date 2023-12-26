import passport from 'passport';
import { Strategy } from 'passport-local';

import debug from 'debug';

import User from '../database/user';
const log = debug('index:localStrategy');

export default function localStrategy() {
  passport.use(
    'signup',
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const foundUser = await User.findOne({ email });

          if (foundUser) {
            throw new Error('User With This Email Already Exist.');
          }

          const user = new User({
            email,
            password,
            username: req.body.username,
          });

          await user.save();

          return done(null, user, { message: 'Successful Registration.' });
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );

  passport.use(
    'login',
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error('User Not Found.');
          }

          if (!user.confirmPassword(password)) {
            throw new Error('Wrong Password Provided.');
          }

          return done(null, user, { message: 'Successfully Logged In.' });
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
}
