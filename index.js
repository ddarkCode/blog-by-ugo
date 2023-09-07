require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogsRouter')
const log = console.log;

const {PORT, MONGODB_URL} = process.env;

(async function connectToDatabase(){
  try {
    await mongoose.connect(MONGODB_URL)
    log('Connection To Mongodb Established Successfully')
  } catch (error) {
    log(`An Error Occurred While Trying To Connect To Mongodb ${JSON.stringify(error)}`);
  }
}())

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));




app.get('/about', (req, res) => {
  return res.render('about')
})

app.get('/contact', (req, res) => {
  return res.render('contact')
})


app.use('/', blogRoutes());



// app.get('/',(req, res) => {
//   res.render('index', {startingContent, posts})
// })



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
