const fs = require('fs');
const path = require('path');

const pathMovies = path.resolves(__dirname, './movies.json');

const readFileMovies = async () => JSON.parse(fs.readFileSync(pathMovies));

module.exports = {
    readFileMovies,
};