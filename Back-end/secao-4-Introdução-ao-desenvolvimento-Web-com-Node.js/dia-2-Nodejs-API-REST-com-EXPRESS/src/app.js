const express = require('express');
const { readFileMovies, moviesById, insertMovie, writeFileMovies } = require('./utils');

const app = express();
app.use(express.json());

// Exercicio 6
app.get('/movies', async (_req, res) => {
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

app.post('/movies', async (req, res) => {
    const { ...body } = req.body;
    const newMovie = await insertMovie(body);
    
    return res.status(201).json(newMovie);
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const { movie, price } = req.body;
   
    const movieId = await moviesById(id);

    if (!movieId) {
        res.status(404).json({ message: 'Not found' });
    }
    
    movieId.movie = movie;
    movieId.price

    await writeFileMovies(movies);

    res.status(200).json(movies[movieId]);
});
module.exports = app;