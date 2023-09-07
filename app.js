require('dotenv').config();




const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');
const {connect} = require('mongoose')

const blogRoutes = require('./routes/blogRoutes');


const log = console.log;

const { MONGO} = process.env;
const PORT = process.env.PORT || 9000


connect(MONGO).then( () => {
  log('Database Connected Successfully.')
}).catch(err => {
  log(`An Error Occurred While Connecting To Database ${JSON.stringify(err)}`);
})

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));




app.get('/about', (req, res) => {
  return res.render('about')
})

app.get('/contact', (req, res) => {
  return res.render('contact')
})


app.use('/', blogRoutes());



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
