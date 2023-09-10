const passport = require('passport');
const {Router} = require('express');



module.exports = function authRoutes() {
    const authRouter = Router();

    authRouter.route('/register')
    .get((req, res) => {
        res.status(200);
        return res.render('register')
    })
    .post(passport.authenticate('register'), (req,res) => {
        res.status(302);
        return res.redirect('/');
    })

    authRouter.route('/login')
    .get((req, res) => {
        res.status(200);
        return res.render('login')
    })
    .post((req, res, next) => {
        passport.authenticate('login', (err, user, info) => {
            if (err || !user) {
                return res.json({err, info})
            }
            req.login(user, async (err) => {
                if (err) {
                    res.status(302);
                    return res.redirect('/auth/login')
                }
                res.status(302);
                return res.redirect('/');
            })
        })(req, res, next)
    })

    authRouter.route('/logout')
    .get((req, res) => {
        req.logout(err => {
            if (!err) {
                res.status(302);
                return res.redirect('/');
            }
        })
    })

    return authRouter;
}