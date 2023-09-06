require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const blogsRouter = require('./routes/blogsRouter')

const app = express();
const port = process.env.PORT2;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


//Write your code here//
app.use('/blogs', blogsRouter())
//CHALLENGE 1: GET All posts

//CHALLENGE 2: GET a specific post by id

//CHALLENGE 3: POST a new post

//CHALLENGE 4: PATCH a post when you just want to update one parameter

//CHALLENGE 5: DELETE a specific post by providing the post id.

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
