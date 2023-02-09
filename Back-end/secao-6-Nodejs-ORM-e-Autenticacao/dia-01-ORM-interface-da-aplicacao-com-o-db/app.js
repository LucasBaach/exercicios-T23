const express = require('express');
const Book = require('./src/controller/book.controller');

const app = express();
app.use(express.json());

app.get('/books', Book.getAll );

module.exports = app;