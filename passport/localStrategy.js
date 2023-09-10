const passport = require('passport');
const {Strategy} = require('passport-local');

const User = require('../database/user');


module.exports = function localStrategy() {
    passport.use('register', new Strategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email, password, done) => {
            console.log('Passport Done Function: ', done);
            try {
                const user = await User.create({email, password, username: req.body.username});
                return done(null, user, {message: "Successful Registration."});
            } catch (err) {
                return done(err, false)
            }
        }
    ));
 
    passport.use('login', new Strategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email, password, done) => {
            try {
            
                const user = await User.findOne({email})
                if (!user) {
                    return done(null, false, {'message': 'User Not Found.'});
                }

                if (!user.confirmPassword(password)) {
                    return done(null, false, {message: 'Wrong Password Provided.'})
                }

                return done(null, user, {message: 'Successfully Logged In.'})
            } catch (err) {
                return done(null, false, {message: `An Error Occurred While Logging In: ${JSON.stringify(err)}`});
            }
        }
    ))
}