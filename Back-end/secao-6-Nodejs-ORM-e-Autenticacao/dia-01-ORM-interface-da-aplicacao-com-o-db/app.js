const express = require('express');
const Book = require('./src/controller/book.controller');

const app = express();
app.use(express.json());

app.get('/books', Book.getAll );

app.get('/books/:id', Book.getById);

app.post('/books', Book.createBook);

module.exports = app;