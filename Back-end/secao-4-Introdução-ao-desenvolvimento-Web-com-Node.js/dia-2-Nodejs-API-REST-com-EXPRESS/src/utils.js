const fs = require('fs');
const path = require('path');

const pathMovies = path.resolve(__dirname, './movies.json');

// Exercicio 04
const readFileMovies = async () => JSON.parse(fs.readFileSync(pathMovies));

const writeFileMovies = async (movie) => {
    fs.writeFileSync(pathMovies, JSON.stringify(movie, null, 2));
};

const moviesById = async (id) => {
    const movies = await readFileMovies();
    const findIdMovies = movies.find((movie) => movie.id === Number(id));
    return findIdMovies;
};

const insertMovie = async (body) => {
    const movies = await readFileMovies();
    const newMovie = { id: movies.length + 1, ...body };
    movies.push(newMovie);
    await writeFileMovies(movies);
    return newMovie;
}; 

module.exports = {
    readFileMovies,
    moviesById,
    insertMovie,
};