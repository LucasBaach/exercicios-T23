const express = require('express');

const app = express();

// FORMATO TEXT/HTML, COMO O CASO ABAIXO:
app.get('/', (req, res) => res.status(200).send('<h1>Hello Word</h1>'));

// Essas requisições podem ser respondidas de vários jeitos, tais como: 

// FORMATO TEXT/JSON, COMO O CASO ABAIXO:
app.get('/JSON', (req, res) => res.status(200).json({ message: 'Hello Word' }));

// REDIRECIONAMENTOS, COMO O CASO ABAIXO:
app.get('/trybe', (req, res) => res.status(200).redirect('https://www.betrybe.com/'));

// PÁGINAS COMPLETAS OU PARTES DELA, COMO O CASO ABAIXO:
app.get('/', (req, res) => res.status(200).render('index.html'));

// FINALIZANDO, COMO O CASO ABAIXO:
app.get('/end', (req, res) => res.status(200).end());
module.exports = app;