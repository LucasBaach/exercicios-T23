const fs = require('fs');
const path = require('path');

const pathMovies = path.resolve(__dirname, './movies.json');

// Exercicio 04
const readFileMovies = async () => JSON.parse(fs.readFileSync(pathMovies));

const moviesById = async (id) => {
    const movies = await readFileMovies();
    const findIdMovies = movies.find((movie) => movie.id === Number(id));
    return findIdMovies;
};

module.exports = {
    readFileMovies,
    moviesById,
};