require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');
const {connect} = require('mongoose')
const session = require('express-session');

const passportConfig = require('./passport/index');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');


const log = console.log;

const { MONGO_CLOUD, MONGO_LOCAL, SESSION_SECRET } = process.env;
const PORT = process.env.PORT || 9000

const app = express();


app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))

passportConfig(app);

// Middleware
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

(async function connectDatabase(){
  try {
         await connect(MONGO_CLOUD)
         log('Database Connected Successfully.')
    } catch (err) {
         log(`An Error Occurred While Connecting To Database ${JSON.stringify(err)}`);
  }
}())

app.get('/about', (req, res) => {
  return res.render('about')
})

app.get('/contact', (req, res) => {
  return res.render('contact')
})


app.use('/auth', authRoutes());
app.use('/', blogRoutes());



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
