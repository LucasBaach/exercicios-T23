const express = require('express');
const { readFileMovies, moviesById } = require('./utils');

const app = express();

app.get('/movies', async (req, res) => {
    const movies = await readFileMovies();

    return res.status(200).json({ movies });
});

// Exercicio 05
app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await moviesById(id);

    if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
    }

    return res.status(200).json({ movie });
});

module.exports = app;