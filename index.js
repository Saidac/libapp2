const express = require('express'),
      morgan = require('morgan'),
      pug = require('pug');

var app = express();

app.use(morgan('dev'));

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.redirect('/books');
});

app.get('/books', (request, response) => {
  response.render('books/index');
});

app.get('/books/new', (request, response) => {
  response.render('books/new');
});

app.listen(3001, () => {
  console.log('Web Server is running on port 3001');
});
