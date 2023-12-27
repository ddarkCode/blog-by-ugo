import dotenv from 'dotenv';
dotenv.config();

import GoogleStrategy from 'passport-google-oauth20';
import debug from 'debug';
import passport from 'passport';

import User from '../database/user';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const log = debug('index:googleStrategy');

export default function googleStrategy() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL:
          'https://ublog-fw5w.onrender.com/api/auth/google/authenticate',
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        log(profile);
        User.findOrCreate(
          {
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
          },
          function (err, user) {
            return done(err, user);
          }
        );
      }
    )
  );
}
