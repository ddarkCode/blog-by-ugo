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
            return done(
              { message: 'User With This Email Already Exist.' },
              false
            );
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
            return done({ message: 'User Not Found.' }, false);
          }

          if (!user.confirmPassword(password)) {
            return done({ message: 'Wrong Password Provided.' }, false);
          }

          return done(null, user, { message: 'Successfully Logged In.' });
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
}
